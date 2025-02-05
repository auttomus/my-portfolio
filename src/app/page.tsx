import {
  Field,
  Fieldset,
  Input,
  Label,
  Textarea,
  Button,
} from "@headlessui/react";

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex items-center justify-between bg-primary text-light text-lg h-16 px-6 transition-opacity duration-300 opacity-0 hover:opacity-100 z-50">
        <h1 className="font-extrabold">AUTTOMUS</h1>
        <nav className="hidden md:block">
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
          className="h-screen flex flex-col justify-center items-center snap-start"
        >
          <h1 className="text-primary text-2xl font-extrabold text-center">
            Profile
          </h1>
          <div className="max-w-3xl text-center mt-4">
            <h2 className="text-primary font-bold mb-4">
              Kadek Agus Arya Pranata
            </h2>
            <p>
              Anak jurusan Rekayasa Perangkat Lunak yang sedang menekuni
              teknologi{" "}
              <span className="text-primary">Artificial Intelligence</span> dan{" "}
              <span className="text-primary">Blockchain</span>.
            </p>
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
