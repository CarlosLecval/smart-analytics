import { sourceSerif } from "./ui/fonts";
import SignInWithGoogle from "./ui/components/signInWithGoogle";

export default function Root() {
  return (
    <main className="p-6 flex flex-col min-h-screen gap-4">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-smart-green p-4 md:h-52">
        <p className={`${sourceSerif.className} text-4xl text-white`}>Smart analytics</p>
      </div>
      <div className="flex grow">
        <div className="flex flex-col gap-3 justify-center w-1/3 bg-gray-50 px-6 rounded-lg">
          <p className="text-2xl">¡Realiza tu Diagnóstico de Perfil Individual!</p>
          <SignInWithGoogle />
        </div>
        <div className="w-2/3 flex items-center justify-center">
          <div className="w-[580] h-[330] bg-gray-500 rounded-lg" />
        </div>
      </div>
    </main>
  );
}
