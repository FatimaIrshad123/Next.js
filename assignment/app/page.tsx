import { Appbar } from "@/components/Appbar";

export default function Home() {
  return (
    <div className='justify-center flex flex-col'>
      <div className="justify-center text-center">
        <h1 className="font-bold text-3xl m-3">Welcome to Home Page</h1>
        <div className="m-3">
          <h2>🖱️Client Page: Interactive client-side rendering in progress.</h2>
          <h2>🚀Server Page: Optamized static content for SEO.</h2>
        </div>
      </div>
    </div>
  );
}
