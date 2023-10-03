import { Separator } from "@/components/ui/separator";
import { SectionProps } from "@/types";

function ProjectSection({ id }: SectionProps) {
  return (
    <section id={id} className="bg-background">
      <div className="container h-screen space-y-8 ">
        <div className="w-full">
          <h2 className="text-3xl font-bold sm:text-4xl">Projects</h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <Separator className="bg-primary" />
      </div>
    </section>
  );
}

export default ProjectSection;
