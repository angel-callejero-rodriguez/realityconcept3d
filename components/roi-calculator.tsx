export function RoiCalculator() {
  return (
    <section
      className="roi-section section-block"
      id="demonstracao-video"
    >
      <div className="page-container">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">DEMONSTRAÇÃO</p>
          <h2>Veja a Realidade Aumentada em ação</h2>
          <p>
            Descubra como os seus clientes vão interagir com os seus produtos 
            diretamente a partir do navegador, sem precisarem de instalar aplicações.
          </p>
        </div>

        {/* Caixa do Vídeo */}
        <div 
          data-reveal 
          style={{ 
            marginTop: "3rem", 
            borderRadius: "16px", 
            overflow: "hidden", 
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            width: "100%",
            maxWidth: "1000px",
            marginInline: "auto",
            backgroundColor: "#111"
          }}
        >
          {/* 
            OPÇÃO A: Ficheiro MP4 (Recomendado) 
            Coloque o seu vídeo na pasta "public" com o nome "demo-video.mp4" 
          */}
          <video
            controls
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "auto", display: "block", aspectRatio: "16/9", objectFit: "cover" }}
          >
            <source src="/demo-video.mp4" type="video/mp4" />
            O seu navegador não suporta a reprodução de vídeos.
          </video>

          {/* 
            OPÇÃO B: Link do YouTube 
            Se preferir usar o YouTube, APAGUE a tag <video> inteira acima e DESCOMENTE o bloco abaixo,
            substituindo o ID_DO_VÍDEO pelas letras do link do seu vídeo.
          */}
          {/*
          <iframe 
            width="100%" 
            style={{ aspectRatio: "16/9", display: "block" }} 
            src="https://www.youtube.com/embed/ID_DO_VIDEO?autoplay=1&mute=1" 
            title="Demonstração Reality Concept" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          */}
        </div>
      </div>
    </section>
  );
}