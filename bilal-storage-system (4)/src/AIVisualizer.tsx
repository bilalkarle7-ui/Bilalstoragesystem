import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { X, Image as ImageIcon, Video, Loader2, Upload } from 'lucide-react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIVisualizer({ onClose }: { onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');
  
  // Image State
  const [imagePrompt, setImagePrompt] = useState('');
  const [imageSize, setImageSize] = useState('1K');
  const [generatedImage, setGeneratedImage] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [imageError, setImageError] = useState('');

  // Video State
  const [videoPrompt, setVideoPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState('16:9');
  const [uploadedBase64, setUploadedBase64] = useState('');
  const [uploadedMimeType, setUploadedMimeType] = useState('');
  const [generatedVideoUrl, setGeneratedVideoUrl] = useState('');
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [videoError, setVideoError] = useState('');

  const handleImageGenerate = async () => {
    if (!imagePrompt) return;
    setIsGeneratingImage(true);
    setImageError('');
    setGeneratedImage('');
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: { parts: [{ text: imagePrompt }] },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: imageSize
          }
        }
      });
      
      let foundImage = '';
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            foundImage = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            break;
          }
        }
      }
      if (foundImage) setGeneratedImage(foundImage);
      else setImageError('Failed to generate image. No image data returned.');
    } catch (err) {
      console.error(err);
      setImageError((err as Error).message);
    } finally {
      setIsGeneratingImage(false);
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onloadend = () => {
      const result = reader.result as string;
      const base64 = result.split(',')[1];
      setUploadedBase64(base64);
      setUploadedMimeType(file.type);
    };
    reader.readAsDataURL(file);
  };

  const handleVideoGenerate = async () => {
    if (!uploadedBase64) {
      setVideoError('Please upload an image first.');
      return;
    }
    
    setIsGeneratingVideo(true);
    setVideoError('');
    setGeneratedVideoUrl('');
    
    try {
      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: videoPrompt,
        image: {
          imageBytes: uploadedBase64,
          mimeType: uploadedMimeType,
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: aspectRatio
        }
      });
      
      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({operation: operation});
      }
      
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink && process.env.GEMINI_API_KEY) {
        const response = await fetch(downloadLink, {
          method: 'GET',
          headers: {
            'x-goog-api-key': process.env.GEMINI_API_KEY,
          },
        });
        const blob = await response.blob();
        setGeneratedVideoUrl(URL.createObjectURL(blob));
      } else {
         setVideoError('Failed to retrieve video URL.');
      }
    } catch (err) {
      console.error(err);
      setVideoError((err as Error).message);
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 className="text-2xl font-display font-bold text-brand-black flex items-center gap-2">
            AI Layout Visualization
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-brand-orange bg-gray-100 rounded-full p-2">
            <X size={20} />
          </button>
        </div>
        
        <div className="flex border-b border-gray-100 px-6">
          <button 
            onClick={() => setActiveTab('image')}
            className={`py-4 px-6 font-semibold flex items-center gap-2 border-b-2 ${activeTab === 'image' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500'}`}
          >
            <ImageIcon size={18} /> Generate Layout Image
          </button>
          <button 
            onClick={() => setActiveTab('video')}
            className={`py-4 px-6 font-semibold flex items-center gap-2 border-b-2 ${activeTab === 'video' ? 'border-brand-orange text-brand-orange' : 'border-transparent text-gray-500'}`}
          >
            <Video size={18} /> Animate Image to Video
          </button>
        </div>
        
        <div className="p-6 flex-1 flex flex-col gap-6">
          {activeTab === 'image' && (
            <>
              <div className="flex flex-col gap-4">
                <label className="font-bold text-sm">Visualize Your Storage Setup</label>
                <div className="flex flex-col md:flex-row gap-4">
                  <input 
                    type="text" 
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="E.g., A modern warehouse with heavy duty orange slotted angle racks..."
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
                  />
                  <select 
                    value={imageSize} 
                    onChange={(e) => setImageSize(e.target.value)}
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
                  >
                    <option value="1K">1K Quality</option>
                    <option value="2K">2K Quality</option>
                    <option value="4K">4K Quality</option>
                  </select>
                  <button 
                    onClick={handleImageGenerate}
                    disabled={isGeneratingImage || !imagePrompt}
                    className="bg-brand-black text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-orange transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isGeneratingImage ? <><Loader2 className="animate-spin" size={18} /> Generating...</> : "Generate Image"}
                  </button>
                </div>
              </div>
              
              {imageError && <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">{imageError}</div>}
              
              {generatedImage && (
                <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden self-center shadow-lg">
                  <img src={generatedImage} alt="AI Generated Graphic" className="max-h-[50vh] object-contain" />
                </div>
              )}
            </>
          )}

          {activeTab === 'video' && (
            <>
              <div className="flex flex-col gap-4">
                <label className="font-bold text-sm">Create a Cinematic Flythrough</label>
                
                <div className="flex items-center gap-4 border-2 border-dashed border-gray-300 p-6 rounded-lg bg-gray-50 justify-center">
                  <Upload size={24} className="text-gray-400" />
                  <div className="text-sm text-gray-600">
                    <input type="file" accept="image/*" onChange={handleFileUpload} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-brand-orange hover:file:bg-orange-100" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-2">
                  <input 
                    type="text" 
                    value={videoPrompt}
                    onChange={(e) => setVideoPrompt(e.target.value)}
                    placeholder="Optional: Camera panning over the warehouse..."
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
                  />
                  <select 
                    value={aspectRatio} 
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-brand-orange"
                  >
                    <option value="16:9">16:9 (Landscape)</option>
                    <option value="9:16">9:16 (Portrait)</option>
                  </select>
                  <button 
                    onClick={handleVideoGenerate}
                    disabled={isGeneratingVideo || !uploadedBase64}
                    className="bg-brand-black text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-orange transition-colors disabled:opacity-50 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {isGeneratingVideo ? <><Loader2 className="animate-spin" size={18} /> Generating...</> : "Generate Video"}
                  </button>
                </div>
              </div>
              
              {videoError && <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm">{videoError}</div>}
              {isGeneratingVideo && <div className="text-center py-10 text-gray-500 flex flex-col items-center gap-3"><Loader2 className="animate-spin" size={32}/><p>Generating video... This may take a few minutes.</p></div>}
              
              {generatedVideoUrl && (
                <div className="mt-4 border border-gray-200 rounded-xl overflow-hidden self-center shadow-lg w-full max-w-2xl bg-black">
                  <video src={generatedVideoUrl} controls autoPlay loop className="w-full" />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
