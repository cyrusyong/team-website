
export const DemoSection = () => {
  return (
    <section id="demo" className="py-20 bg-background px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-12 text-foreground">
          Video Demonstration
        </h2>
        <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center relative">
          <video
            id="demoVideo"
            src="/videos/Demo.mp4"
            className="w-full h-full"
            onClick={() => {
              const video = document.getElementById('demoVideo') as HTMLVideoElement;
              const playButton = document.getElementById('playButton')!;
              if (video.paused) {
                video.play();
                playButton.style.display = 'none';
              } else {
                video.pause();
                playButton.style.display = 'flex';
              }
            }}
            onTimeUpdate={() => {
              const video = document.getElementById('demoVideo') as HTMLVideoElement;
              const progressBar = document.getElementById('progressBar') as HTMLDivElement;
              const progress = (video.currentTime / video.duration) * 100;
              progressBar.style.width = `${progress}%`;
            }}
          ></video>
          <button
            id="playButton"
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl"
            onClick={() => {
              const video = document.getElementById('demoVideo') as HTMLVideoElement;
              if (video.paused) {
                video.play();
                document.getElementById('playButton')!.style.display = 'none';
              }
            }}
          >
            ▶
          </button>
          <div
            id="progressContainer"
            className="absolute bottom-0 left-0 right-0 h-2 bg-gray-700 cursor-pointer"
            onClick={(e) => {
              const video = document.getElementById('demoVideo') as HTMLVideoElement;
              const progressContainer = document.getElementById('progressContainer') as HTMLDivElement;
              const rect = progressContainer.getBoundingClientRect();
              const offsetX = e.clientX - rect.left;
              const newTime = (offsetX / rect.width) * video.duration;
              video.currentTime = newTime;
            }}
          >
            <div
              id="progressBar"
              className="h-full bg-blue-500"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};
