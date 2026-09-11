import React from 'react';
import { VIDEO_TESTIMONIALS } from '../data/siteData';

export const VideoTestimonialsSection: React.FC = () => {
  return (
    <section id="section-video-testimonials" className="w-full py-8 md:py-12 px-4">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((video) => (
            <div
              key={video.id}
              className="bg-black rounded-[12px] overflow-hidden shadow-lg aspect-video border border-blue-100"
            >
              <iframe
                className="w-full h-full rounded-[12px]"
                src={`https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1&origin=https://askdrjain.in`}
                title={video.title || "Patient Video Review"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
