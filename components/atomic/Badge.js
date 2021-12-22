export const Badge = ({ label = "label" }) => {
  return (
    <div className="w-16 h-16">
      <div className="border-black border-2 bg-amber-600 w-16 h-16" />
      <div className="relative -top-11  -left-4  bg-sky-500 w-[60px] h-6 rotate-90 text-center font-semibold">
        {label}
      </div>
    </div>
  );
};
