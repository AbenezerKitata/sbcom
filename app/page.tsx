import { ModeToggle } from "@/components/ui/mode-toggle";
import { NavMenu } from "./nav";

export default function Home() {
  return (
    <>
      <header className="mt-5 flex justify-between">
        <div className="ml-5 lg:ml-10">
          <NavMenu />
        </div>
        <div className="flex justify-end md:mr-10 mr-5">
          <ModeToggle />
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center gap-10 p-24">
        <h1>Some Heading For Testing Bigger Fonts</h1>
        <h2>Smaller Heading For Testing Slightly Lower Headings </h2>
        <p className="p">
          Testing a paragraph: Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Modi, at ipsam! Vitae similique dolorum rem, ducimus
          reiciendis fugit quod sint dolor aliquam voluptatem alias mollitia
          exercitationem voluptates velit nostrum corrupti Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Inventore perferendis quibusdam
          laborum cumque laboriosam doloremque suscipit alias quo saepe aliquam.
          Natus delectus exercitationem veniam doloremque impedit ut placeat
          repellat, necessitatibus nihil earum iste consectetur alias ducimus
          ullam assumenda deleniti tempora quis aliquam cum praesentium
          voluptates. Dolor et nesciunt est aliquid?
        </p>
      </main>
    </>
  );
}
