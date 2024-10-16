export default function ErrorComponent() {
  //Height of the div adjusted to subtract the padding of the parent div
  return (
    <div
      style={{ height: 'calc(100vh - 128px)' }}
      className="flex flex-col items-center justify-center overflow-hidden"
    >
      <h1 className="text-xl font-bold">
        Oops! If you see this page, we could be having some issues.
      </h1>
      <p className="pt-5 italic text-gray-600">
        Please, try again later or contact the developers.
      </p>
    </div>
  );
}
