"use client";

import ReactPlayer from "react-player/lazy";

interface VideoPlayerProps {
    url: string;
    title: string;
}

export function VideoPlayer({ url, title }: VideoPlayerProps) {
    return (
        <div className="rounded-2xl overflow-hidden bg-black shadow-2xl aspect-video">
            <ReactPlayer
                url={url}
                width="100%"
                height="100%"
                controls
                playing={false}
                title={title}
                config={{
                    youtube: {
                        playerVars: { showinfo: 1, rel: 0 },
                    },
                }}
            />
        </div>
    );
}
