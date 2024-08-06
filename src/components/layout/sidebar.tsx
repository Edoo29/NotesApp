export default function Sidebar() {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content text-center">
        <label
          htmlFor="my-drawer"
          className="btn btn-primary drawer-button mt-64"
        >
          Open a note or write a new one
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          <div className="hover:bg-base-100 p-4 rounded-xl cursor-pointer hover:shadow-xl">
            <p className="font-bold">NOTE 1</p>
            <p>This is the description of the first note</p>
            <p>2024/08/04</p>
          </div>
          <div className="hover:bg-base-100 p-4 rounded-xl cursor-pointer hover:shadow-xl">
            <p className="font-bold">NOTE 2</p>
            <p>This is the description of the second note</p>
            <p>2024/08/04</p>
          </div>
          <p className="text-center mt-10">2 notes</p>
        </ul>
      </div>
    </div>
  );
}
