const Header = () => {
  return (
    <div className="flex min-h-screen items-center justify-center flex-col">
      <div className="flex items-center md:items-end gap-4 flex-col md:flex-row">
        <img
          src="https://github.com/fabricio-joaquim.png"
          alt="foto do homem mais lindo do brasil"
          width={200}
          height={200}
          className="rounded-full shadow-lg"
        />
        <span className="animate-typing overflow-hidden italic font-great whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl md:text-4xl lg:text-5xl text-white font-light">
          Fabricio Joaquim dos Santos Melo
        </span>
      </div>
      <p className="text-white text-center text-xl md:text-2xl lg:text-3xl mt-5 backdrop-blur bg-white/50 py-10 px-2 rounded-xl w-[20rem] md:w-[30rem] lg:w-[500rem]">
        Desenvolvedor Front-end com experiência em React.js, Next.js, Redux,
        JavaScript, TypeScript, Styled Components, Material UI e consumo de APIs
        REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis.
        Também possui experiência em projetos gerenciados por Metodologias
        Ágeis. Formado em Ciência da Computação.
      </p>
    </div>
  );
};

export { Header };
