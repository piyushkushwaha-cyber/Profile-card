import Image from "next/image";

export default function Home() {
  return (
    
    <div className="min-h-screen flex justify-center bg-black">
    
        <div className="border-2 border-black p-4 bg-blue-300" >
          <div className="text-gray-900 text-4xl font-extrabold text-center mb-28 mt-20">
            <p>Piyush Kushwaha</p>
          </div>

          <div className="flex justify-center">
            <div className="w-56 h-56 relative rounded-full overflow-hidden mb-48">
              <Image
                src="/piyush-photo.jpeg"
                alt="My photo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center text-gray-900 text-2xl mb-6">
            <p>I Work at UnifyApps as a frontend developer.</p>
            <p>My Contact No. is 93548XXXXX</p>
            <p>My email :- piyush.kushwaha@unifyapps.com</p>
          </div>
      </div>
    </div>
  );
}