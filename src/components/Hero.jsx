
const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h2 className="nav-left-header" >Insight<span className="gist" >Gist</span></h2>
        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/karthiknadar1204", "_blank")
          }
          className='black_btn'
        > 
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
      Crafting Epitomes from <br className='max-md:hidden' />
        <span className='orange_gradient '>the Vast Tapestry of Textual Chronicles</span>
      </h1>
      <h2 className='desc'>
      InsightGist, the Open-Source Article Wizard, Conjures Clear and Digestible Summaries
      </h2>
    </header>
  );
};

export default Hero;