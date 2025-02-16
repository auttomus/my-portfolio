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
      <header className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between bg-primary px-6 text-base text-light transition-opacity duration-300 opacity-0 hover:opacity-100 md:text-lg lg:text-xl">
        <h1 className="font-extrabold">
          <a href="/">AUTTOMUS</a>
        </h1>
        <nav className="hidden sm:block">
          <ul className="flex items-center gap-6 font-medium">
            <li>
              <a className="hover:animate-pulse" href="#profile">
                Profile
              </a>
            </li>
            <li>
              <a className="hover:animate-pulse" href="#project">
                Project
              </a>
            </li>
            <li>
              <a className="hover:animate-pulse" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <ul className="flex items-center gap-4 pl-12 font-medium">
          <li>ID</li>
          <li>EN</li>
        </ul>
      </header>

      {/* Main Content */}
      <main className="h-screen w-full snap-y snap-mandatory overflow-y-scroll">
        {/* Profile Section */}
        <section
          id="profile"
          className="grid h-screen place-items-center snap-start md:grid-cols-[3fr_5fr]"
        >
          <div className="relative col-span-2 mx-6 h-36 w-36 self-end justify-self-center md:col-span-1 md:h-56 md:w-56 md:self-center md:justify-self-end lg:h-72 lg:w-72">
            <Image
              className="rounded-full object-cover"
              src="/profile.jpg"
              alt="profile"
              fill
            />
          </div>

          <div className="z-10 grid grid-cols-[auto] grid-rows-[auto] col-start-2 row-start-2 row-end-2 justify-items-center justify-self-start self-start text-justify text-sm md:row-start-1 md:row-end-1 md:self-center md:text-base lg:text-lg">
            {/* Visual Elements */}
            <div className="z-0 col-start-1 col-end-1 row-start-1 row-end-1 h-72 w-72 rounded-full bg-gradient-to-b from-complimentary to-light md:h-96 md:w-96 md:place-self-start"></div>
            {/* Main Elements */}
            <div className="z-10 col-start-1 col-end-1 row-start-1 row-end-1 self-center text-center md:text-left">
              <h2 className="mb-4 text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
                Kadek Agus Arya Pranata
              </h2>
              <p className="mb-4 whitespace-pre-line">
                Anak jurusan Rekayasa Perangkat Lunak yang sedang menekuni
                teknologi{" "}
                <span className="text-primary">Artificial Intelligence</span>{" "}
                dan
                <span className="text-primary"> Blockchain</span>.
              </p>
              <p className="whitespace-pre-line">
                Bersekolah di{" "}
                <span className="text-primary">SMK Negeri 1 Denpasar</span>, SMK{" "}
                <span className="text-primary">terbaik</span> di kota Denpasar
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 grid-rows-[1fr_1fr_1fr]">
          {/* Project Section */}
          <section
            id="project"
            className="z-10 col-start-1 col-end-1 row-start-1 row-end-1 flex h-screen flex-col items-center self-start justify-center snap-start"
          >
            <h1 className="text-2xl font-extrabold text-primary">Project</h1>
            {/*  Box */}
            <div className="mt-4 grid w-60 h-80 grid-cols-[5fr_3fr] grid-rows-[4fr_2fr_6fr] items-baseline rounded-2xl bg-white bg-opacity-35 p-6 text-left text-xs shadow-lg sm:h-96 sm:w-72 sm:text-sm">
              {/* Project Title */}
              <h2 className="text-lg font-medium sm:text-xl">Bot Katla</h2>
              {/* Status */}
              <h3 className="text-right text-gray-400">unfinished</h3>
              {/* Documentation */}
              <a
                href="https://github.com/auttomus/telegram-mini-app.git"
                className="col-span-2 col-start-1 self-end text-primary underline"
              >
                Documentation
              </a>
              {/* Description */}
              <p className="col-span-3 col-start-1 mt-2 text-justify">
                Sebuah program yang dituliskan dalam bahasa pemrograman python
                yang berfungsi menjawab teka-teki katla secara otomatis.
                Menggunakan teknologi machine learning
              </p>
            </div>
          </section>

          {/* Visual Elements */}
          <div className="col-start-1 col-end-1 row-start-1 row-span-3 grid grid-cols-1 grid-rows-1 self-center justify-items-center justify-center">
            <div className="md:h-[1024px] md:w-[1024px] rounded-full bg-gradient-to-b from-complimentary to-primary motion-safe:animate-spin"></div>
          </div>

          {/* Contact Section */}
          <section
            id="contact"
            className="z-10 col-start-1 col-end-1 row-start-3 row-end-3 flex h-screen flex-col items-center self-start justify-center snap-start"
          >
            <div className="mt-4 w-full max-w-lg rounded-3xl bg-white bg-opacity-35 p-6 shadow-lg">
              <Fieldset className="space-y-6">
                <Field>
                  <Label className="block pb-1">Name</Label>
                  <Input
                    className="block h-9 w-full min-w-72 rounded-lg border-2 border-primary"
                    name="name"
                  />
                </Field>
                <Field>
                  <Label className="block pb-1">Email</Label>
                  <Input
                    className="block h-9 w-full min-w-72 rounded-lg border-2 border-primary"
                    name="email"
                  />
                </Field>
                <Field>
                  <Label className="block pb-1">Message</Label>
                  <Textarea
                    className="block h-32 w-full min-w-72 rounded-lg border-2 border-primary"
                    name="message"
                  />
                </Field>
                <Button className="h-9 w-full min-w-72 rounded-lg bg-primary text-light">
                  Send
                </Button>
              </Fieldset>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex h-16 w-full items-center justify-center bg-primary text-center text-light">
        <p>© 2025. All rights reserved</p>
      </footer>
    </>
  );
}
