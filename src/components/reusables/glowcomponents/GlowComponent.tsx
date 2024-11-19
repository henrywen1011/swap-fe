import glow from "@assets/glow.svg";
const GlowComponent = () => {
  return (
    <div className="relative flex">
      <img className="w-[40rem] opacity-[500%]" src={glow} alt="" />
      <img className="w-[20rem] opacity-[500%]" src={glow} alt="" />
    </div>
  );
};

export default GlowComponent;
