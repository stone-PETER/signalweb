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
    name: "Ajesh J S",
    image: "Ajesh.jpeg",
    role: "Chief Technical Officer at ELXTRON LABS LLP",
    bio: "Expert in technical innovation and leadership",
    linkedin: "https://www.linkedin.com/in/ajesh-j-s-ajs",
  },
  {
    name: "Sanjay Johny",
    image: "Sanjay.jpeg",
    role: "Perception Systems Designer at Swapp Design",
    bio: "Industry expert and technology leader",
    linkedin: "https://www.linkedin.com/in/sanjay-johny",
  },
  {
    name: "Dr. ANZAR S. M.",
    image: "Ansar.jpeg",
    role: "Assistant Professor, Department of ECE",
    bio: "T. K. M. College of Engineering",
    linkedin: "#",
  },
  {
    name: "Asif Saif",
    image: "Asif.jpeg",
    role: "Co-founder, ELXTRON LABS",
    bio: "Technology entrepreneur and innovation leader",
    linkedin: "https://www.linkedin.com/in/asif-saif-764aa42a4",
  },
  {
    name: "Abhinav Rajeev",
    image: "Abhinav.jpeg",
    role: "Building Bumblebee Instruments ",
    bio: "Building Bumblebee Instruments",
    linkedin: "https://www.linkedin.com/in/abhinavr212",
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
