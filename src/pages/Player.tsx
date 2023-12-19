import { MessageCircle } from 'lucide-react';
import Header from '../components/Header';
import Video from '../components/Video';
import Module from '../components/Module';

export default function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1110px] flex-col gap-6">
        <div className="flex justify-between items-center">
          <Header />
          <button className="relative flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-600">
            <MessageCircle className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              moduleIndex={0}
              title="Introdução ao redux"
              amountOfLessons={4}
            />
            <Module
              moduleIndex={1}
              title="Introdução ao redux"
              amountOfLessons={4}
            />
            <Module
              moduleIndex={2}
              title="Introdução ao redux"
              amountOfLessons={4}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
