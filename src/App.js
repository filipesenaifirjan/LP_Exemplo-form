
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="main">
    <div className="center">
     <div className="menu">
     <div className="logo">
     <h3>Cadastro simples</h3>
     </div>
     <div className="item-menu">
       <a href="#">Login</a>
     </div>
   </div>

   <div className="form">
    <h2>Entre em contato!</h2>

       <form>
       <div className="items-form">
         <input placeholder="Seu nome..." type="text"/>
         <input placeholder="Telefone..."type="text"/>
         <input placeholder="email..." type="text"/> 
         <input placeholder="Bairro..."type="text"/>
         <input placeholder="Rua..."type="text"/>
         <input placeholder="Número..."type="text"/>
         <input type="submit" />
       </div>
     </form>
   </div>
   </div>      
   </div>
    <div className='conteudo'>
      <div className='center'>
        <div className='conteudo-single'>
        <h3> título da chamada</h3> 
        <p>
          Aqui é o conteúdo de exemplo para o site, ainda estamos trabalhando na estilização e nas funcionalidades.
        </p>
      </div>
      <div className='conteudo-single'>
        <h3> título da chamada</h3> 
        <p>
        Aqui é o conteúdo de exemplo para o site, ainda estamos trabalhando na estilização e nas funcionalidades.
        </p>
    </div>

    </div>
    </div>
    </div>

  );
}

export default App;
