import { getServerSession } from "next-auth";
import Image from "next/image";
import ButtonSignout from "./ButtonSignout";

async function DashboardPage() {
  const session = await getServerSession();
  console.log(session);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
      <div className="relative z-10">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width="200"
                height="200"
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none"></path>
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth="0"
              ></path>
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            ></rect>
          </svg>
        </div>
      </div>
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl text-center">
          <div className="shadow-inner py-5 rounded bg-gray-50">
            <div className="text-center">
              <div className="p-10 text-center ">
                <h1 className="my-8">
                  <span className="font-bold">Name:</span> <br />{" "}
                  {session?.user?.name}
                </h1>
                <h1 className="my-8">
                  <span className="font-bold">Email:</span> <br />{" "}
                  {session?.user?.email}
                </h1>
                <div className="mt-8">
                  <span className="font-bold mt-2">Profile photo:</span> <br />{" "}
                  <Image
                    src={session?.user?.image || ""}
                    alt="Image profile"
                    width={100}
                    height={100}
                    style={{ margin: "0 auto", borderRadius: 10}}
                  />
                </div>

                <div className="mt-5">
                  <ButtonSignout />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;
