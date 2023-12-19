import { ChevronDown, Video } from 'lucide-react';
import Lesson from './Lesson';

interface ModuleProps {
  moduleIndex: number;
  title: string;
  amountOfLessons: number;
}

function Module({ moduleIndex, title, amountOfLessons }: ModuleProps) {
  return (
    <div>
      <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center text-sm bg-zinc-950">
          {moduleIndex}
        </div>

        <div className="flex flex-col gap-1 text-left">
          <strong>{title}</strong>
          <span className="text-xs text-zinc-50">{amountOfLessons} aulas</span>
        </div>
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
      </button>

      <nav className="relative flex flex-col gap-4 p-6">
        <Lesson title="Introdução ao redux" duration={5} />
        <Lesson title="Introdução ao redux" duration={5} />
        <Lesson title="Introdução ao redux" duration={5} />
        <Lesson title="Introdução ao redux" duration={5} />
      </nav>
    </div>
  );
}

export default Module;
