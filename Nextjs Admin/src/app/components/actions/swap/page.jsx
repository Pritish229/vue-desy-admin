"use client";

import { useState } from "react";
import {
  ShowcasePage,
  ShowcaseSection,
  ShowcaseItem,
} from "../../../../components/ComponentShowcase";
import { Sun, Moon, Volume2, VolumeX, Heart, Menu, X, Play, Pause, Eye, EyeOff, ThumbsUp, ThumbsDown } from "lucide-react";

export default function SwapPage() {
  const [theme, setTheme] = useState(false);
  const [muted, setMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const [vote, setVote] = useState(null);

  return (
    <ShowcasePage
      title="Swap"
      description="Swap allows you to toggle the visibility of two elements using a checkbox or class."
    >
      {/* Basic Usage */}
      <ShowcaseSection title="Basic Usage" description="Click to swap between two states.">
        <ShowcaseItem title="Text Swap">
          <label className="swap">
            <input type="checkbox" />
            <div className="swap-on">ON</div>
            <div className="swap-off">OFF</div>
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="Emoji Swap">
          <label className="swap swap-rotate text-4xl">
            <input type="checkbox" />
            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Icon Swaps */}
      <ShowcaseSection title="Icon Swaps" description="Toggle between two icons with different effects.">
        <ShowcaseItem title="Theme Toggle (Rotate)">
          <label className="swap swap-rotate">
            <input 
              type="checkbox" 
              checked={theme}
              onChange={() => setTheme(!theme)}
            />
            <Sun className="swap-on w-8 h-8 text-warning" />
            <Moon className="swap-off w-8 h-8" />
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="Volume Toggle (Flip)">
          <label className="swap swap-flip">
            <input 
              type="checkbox" 
              checked={muted}
              onChange={() => setMuted(!muted)}
            />
            <VolumeX className="swap-on w-8 h-8 text-error" />
            <Volume2 className="swap-off w-8 h-8" />
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="Like Toggle">
          <label className="swap swap-active">
            <input 
              type="checkbox" 
              checked={liked}
              onChange={() => setLiked(!liked)}
            />
            <Heart className={`swap-on w-8 h-8 fill-error text-error`} />
            <Heart className="swap-off w-8 h-8" />
          </label>
        </ShowcaseItem>

        <ShowcaseItem title="Menu Toggle (Rotate)">
          <label className="swap swap-rotate">
            <input 
              type="checkbox" 
              checked={menuOpen}
              onChange={() => setMenuOpen(!menuOpen)}
            />
            <X className="swap-on w-8 h-8" />
            <Menu className="swap-off w-8 h-8" />
          </label>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Button Swaps */}
      <ShowcaseSection title="Button Swaps" description="Swap content inside buttons.">
        <ShowcaseItem title="Play/Pause Button">
          <button 
            className="btn btn-primary btn-circle"
            onClick={() => setPlaying(!playing)}
          >
            <label className="swap swap-rotate pointer-events-none">
              <input type="checkbox" checked={playing} readOnly />
              <Pause className="swap-on w-6 h-6" />
              <Play className="swap-off w-6 h-6" />
            </label>
          </button>
        </ShowcaseItem>

        <ShowcaseItem title="Visibility Toggle">
          <button 
            className="btn btn-ghost"
            onClick={() => setVisible(!visible)}
          >
            <label className="swap pointer-events-none">
              <input type="checkbox" checked={!visible} readOnly />
              <span className="swap-on flex items-center gap-2">
                <EyeOff className="w-5 h-5" /> Hidden
              </span>
              <span className="swap-off flex items-center gap-2">
                <Eye className="w-5 h-5" /> Visible
              </span>
            </label>
          </button>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Animation Effects */}
      <ShowcaseSection title="Animation Effects" description="Different swap animation styles.">
        <ShowcaseItem title="Rotate Effect">
          <label className="swap swap-rotate text-2xl">
            <input type="checkbox" />
            <div className="swap-on">🌙</div>
            <div className="swap-off">☀️</div>
          </label>
          <span className="text-sm text-base-content/60">swap-rotate</span>
        </ShowcaseItem>

        <ShowcaseItem title="Flip Effect">
          <label className="swap swap-flip text-2xl">
            <input type="checkbox" />
            <div className="swap-on">🔙</div>
            <div className="swap-off">🔜</div>
          </label>
          <span className="text-sm text-base-content/60">swap-flip</span>
        </ShowcaseItem>

        <ShowcaseItem title="Active Effect">
          <label className="swap swap-active text-2xl">
            <input type="checkbox" />
            <div className="swap-on">✅</div>
            <div className="swap-off">⬜</div>
          </label>
          <span className="text-sm text-base-content/60">swap-active</span>
        </ShowcaseItem>
      </ShowcaseSection>

      {/* Practical Examples */}
      <ShowcaseSection title="Practical Examples" description="Real-world use cases.">
        <ShowcaseItem title="Password Visibility">
          <div className="form-control w-full max-w-xs">
            <div className="relative">
              <input 
                type={visible ? "text" : "password"} 
                placeholder="Enter password" 
                className="input input-bordered w-full pr-12" 
                defaultValue="secret123"
              />
              <button 
                className="btn btn-ghost btn-sm btn-circle absolute right-1 top-1/2 -translate-y-1/2"
                onClick={() => setVisible(!visible)}
              >
                <label className="swap swap-rotate pointer-events-none">
                  <input type="checkbox" checked={!visible} readOnly />
                  <EyeOff className="swap-on w-4 h-4" />
                  <Eye className="swap-off w-4 h-4" />
                </label>
              </button>
            </div>
          </div>
        </ShowcaseItem>

        <ShowcaseItem title="Vote Buttons">
          <div className="flex items-center gap-2">
            <button 
              className={`btn btn-sm ${vote === 'up' ? 'btn-success' : 'btn-ghost'}`}
              onClick={() => setVote(vote === 'up' ? null : 'up')}
            >
              <ThumbsUp className="w-4 h-4" />
            </button>
            <span className="font-mono text-lg">42</span>
            <button 
              className={`btn btn-sm ${vote === 'down' ? 'btn-error' : 'btn-ghost'}`}
              onClick={() => setVote(vote === 'down' ? null : 'down')}
            >
              <ThumbsDown className="w-4 h-4" />
            </button>
          </div>
        </ShowcaseItem>
      </ShowcaseSection>
    </ShowcasePage>
  );
}
