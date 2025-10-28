export function HomePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bem-vindo à Rewind!</h1>
      <p>Sua plataforma para explorar e reviver momentos do cinema.</p>
      <nav>
        <ul>
          <li><a href="/movies">Filmes</a></li>
          <li><a href="/genres">Gêneros</a></li>
          <li><a href="/about">Sobre</a></li>
        </ul>
      </nav>
      <section style={{ marginTop: '30px' }}>
        <h2>Filmes em Destaque</h2>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <h3>Filme 1</h3>
            <p>Uma breve descrição do filme 1.</p>
            <button>Ver Detalhes</button>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <h3>Filme 2</h3>
            <p>Uma breve descrição do filme 2.</p>
            <button>Ver Detalhes</button>
          </div>
          <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '200px' }}>
            <h3>Filme 3</h3>
            <p>Uma breve descrição do filme 3.</p>
            <button>Ver Detalhes</button>
          </div>
        </div>
      </section>
      <footer style={{ marginTop: '50px', fontSize: '0.8em', color: '#666' }}>
        <p>&copy; 2025 Rewind. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
