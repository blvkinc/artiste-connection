import './App.css';

function App() {
  return (
    <div className="App">
      <div className="background-container">
        {/* Spline design iframe as background */}
        <iframe
          src="https://my.spline.design/untitled-6217a740e713536b7272ab5ddfaf3442/?storefront=envato-elements"
          title="Spline Design Background"
          className="spline-background"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; fullscreen; camera; microphone; geolocation"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
        
        {/* Logo overlay */}
        <div className="text-overlay">
          <img src="/logo.svg" alt="Artiste Connection Logo" className="main-logo" />
        </div>
      </div>
    </div>
  );
}

export default App;
