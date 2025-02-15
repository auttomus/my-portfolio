import {
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
  Button,
} from "@headlessui/react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-primary text-light text-base md:text-lg lg:text-xl h-16 px-6 transition-opacity duration-300 opacity-0 hover:opacity-100 z-50">
        <h1 className="font-extrabold">AUTTOMUS</h1>
        <nav className="hidden sm:block">
          <ul className="font-medium flex items-center gap-6">
            <li>
              <a href="#profile">Profile</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <ul className="font-medium flex items-center gap-4">
          <li>ID</li>
          <li>EN</li>
        </ul>
      </header>

      {/* Main Content */}
      <main className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Profile Section */}
        <section
          id="profile"
          className="h-screen grid md:grid-cols-[3fr_5fr] place-items-center snap-start"
        >
          <div className="relative w-36 h-36 md:w-56 md:h-56 lg:w-72 lg:h-72 mx-6 col-span-2 md:col-span-1 self-end md:self-center justify-self-center md:justify-self-end">
            <Image
              className="rounded-full object-cover"
              src="/profile.jpg"
              alt="profile"
              fill
            />
          </div>

          <div className="z-10 text-justify text-sm md:text-base lg:text-lg grid grid-cols-[auto] grid-rows-[auto] col-start-2 row-start-2 row-end-2 md:row-start-1 md:row-end-1 justify-items-center justify-self-start self-start md:self-center">
            <div className="w-72 h-72 z-0 row-start-1 row-end-1 col-start-1 col-end-1 rounded-full bg-gradient-to-b from-complimentary to-light md:w-96 md:h-96 md:place-self-start"></div>
            <div className="z-10 row-start-1 row-end-1 col-start-1 col-end-1 self-center text-center md:text-left">
              <h1 className="text-primary text-2xl md:text-3xl lg:text-4xl  font-extrabold">
                Profile
              </h1>
              <h2 className="text-primary text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                Kadek Agus Arya Pranata
              </h2>
              <p className="mb-4">
                Anak jurusan Rekayasa Perangkat Lunak yang sedang menekuni
                teknologi{" "}
                <span className="text-primary">Artificial Intelligence</span>{" "}
                dan <span className="text-primary">Blockchain</span>.
              </p>
              <p>
                {" "}
                Bersekolah di{" "}
                <span className="text-primary">SMK Negeri 1 Denpasar</span>, SMK{" "}
                <span className="text-primary">terbaik</span> di kota Denpasar
              </p>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section
          id="project"
          className="h-screen flex flex-col justify-center items-center snap-start"
        >
          <h1 className="text-primary text-2xl font-extrabold">Project</h1>
          <div className="mt-4 p-6 bg-white shadow-lg rounded-lg w-72 text-center">
            <h2 className="text-xl font-bold">Telegram Bot</h2>
            <h3 className="text-sm text-gray-500">Unfinished</h3>
            <a
              href="https://github.com/auttomus/telegram-mini-app.git"
              className="underline"
            >
              Documentation
            </a>
            <p className="mt-2">
              Bot telegram yang menggunakan bahasa pemrograman Python.
            </p>
          </div>
        </section>

        {/* Bobola */}
        <div className="grid grid-cols-1 grid-rows-1 justify-items-center justify-center">
          <div className="w-[50vw] h-[50vw] rounded-full bg-gradient-to-b from-complimentary to-primary"></div>
        </div>

        {/* Contact Section */}
        <section
          id="contact"
          className="h-screen flex flex-col justify-center items-center snap-start"
        >
          <h1 className="text-primary text-2xl font-extrabold">Contact</h1>
          <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-6 mt-4">
            <Fieldset className="space-y-6">
              <Field>
                <Label className="block pb-1">Name</Label>
                <Input
                  className="block w-full min-w-72 h-9 border-primary border-2 rounded-lg"
                  name="name"
                />
              </Field>
              <Field>
                <Label className="block pb-1">Email</Label>
                <Input
                  className="block w-full min-w-72 h-9 border-primary border-2 rounded-lg"
                  name="email"
                />
              </Field>
              <Field>
                <Label className="block pb-1">Message</Label>
                <Textarea
                  className="block w-full min-w-72 border-primary border-2 rounded-lg"
                  name="message"
                />
              </Field>
              <Button className="rounded-lg w-full h-10 min-w-72 bg-primary text-light">
                Send
              </Button>
            </Fieldset>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full h-16 flex items-center justify-center bg-primary text-light text-center">
        <p>© 2025. All rights reserved</p>
      </footer>
    </>
  );
}
