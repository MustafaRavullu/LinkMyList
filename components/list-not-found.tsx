import GoBackBtn from "./go-back-btn";

export default function ListNotFound() {
  return (
    <div className="flex text-center flex-col gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <span className="text-5xl">😖</span>
      <span className="text-sm">We failed to find your list. Sorry!</span>{" "}
      <GoBackBtn label="Create your own list" />
    </div>
  );
}
