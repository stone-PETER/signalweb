/**
 * SIGNAL 4.0 - Data Config with LocalStorage Support
 *
 * HOW TO ADD A SPEAKER:
 * 1. Use 'admin.html' to add speakers dynamically.
 * 2. Data will be stored in browser's localStorage.
 * 3. Default data below is used only if localStorage is empty.
 */

const DEFAULT_SPEAKERS = [
  {
    name: "Hero #1",
    image: "PASE.png",
    role: "Speaker",
    bio: "",
    linkedin: "#",
  },
  {
    name: "Hero #2",
    image: "PASE.png",
    role: "REVEALING SOON",
    bio: "A mysterious hero joins the signal!",
    linkedin: "#",
  },
  {
    name: "Hero #3",
    image: "PASE.png",
    role: "REVEALING SOON",
    bio: "The power is growing...",
    linkedin: "#",
  },
  {
    name: "Hero #4",
    image: "PASE.png",
    role: "REVEALING SOON",
    bio: "Final recruitment in progress.",
    linkedin: "#",
  },
];

// LocalStorage Management
const StorageManager = {
  SPEAKERS_KEY: "signal_speakers",
  GALLERY_KEY: "signal_gallery",

  // Get speakers from localStorage or use defaults
  getSpeakers() {
    try {
      const stored = localStorage.getItem(this.SPEAKERS_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_SPEAKERS;
    } catch (e) {
      console.error("Error loading speakers:", e);
      return DEFAULT_SPEAKERS;
    }
  },

  // Save speakers to localStorage
  saveSpeakers(speakers) {
    try {
      localStorage.setItem(this.SPEAKERS_KEY, JSON.stringify(speakers));
      return true;
    } catch (e) {
      console.error("Error saving speakers:", e);
      return false;
    }
  },

  // Add a new speaker
  addSpeaker(speaker) {
    const speakers = this.getSpeakers();
    speaker.id = Date.now();
    speakers.push(speaker);
    return this.saveSpeakers(speakers);
  },

  // Delete a speaker
  deleteSpeaker(id) {
    let speakers = this.getSpeakers();
    speakers = speakers.filter((s) => s.id !== id);
    return this.saveSpeakers(speakers);
  },

  // Get gallery files from localStorage or use defaults
  getGallery() {
    try {
      const stored = localStorage.getItem(this.GALLERY_KEY);
      return stored ? JSON.parse(stored) : DEFAULT_GALLERY_FILES;
    } catch (e) {
      console.error("Error loading gallery:", e);
      return DEFAULT_GALLERY_FILES;
    }
  },

  // Save gallery files to localStorage
  saveGallery(files) {
    try {
      localStorage.setItem(this.GALLERY_KEY, JSON.stringify(files));
      return true;
    } catch (e) {
      console.error("Error saving gallery:", e);
      return false;
    }
  },

  // Reset to defaults
  resetToDefaults() {
    this.saveSpeakers(DEFAULT_SPEAKERS);
    this.saveGallery(DEFAULT_GALLERY_FILES);
  },
};

// Expose for backward compatibility
const SPEAKERS = StorageManager.getSpeakers();

const DEFAULT_GALLERY_FILES = [
  "WhatsApp Image 2026-01-18 at 11.08.23 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.24 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.25 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.26 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.27 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.28 AM (1).jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.28 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.29 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.30 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.32 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.33 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.34 AM (1).jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.34 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.35 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.37 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.38 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.40 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.42 AM.jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.43 AM (1).jpeg",
  "WhatsApp Image 2026-01-18 at 11.08.43 AM.jpeg",
];

const GALLERY_FILES = StorageManager.getGallery();
