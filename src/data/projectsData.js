export const projectsData = {
  todo: {
    title: "ToDo",
    pitch: "A minimalist, distraction-free task manager designed for focused productivity.",
    role: "Solo designer & developer",
    stack: ["React", "Capacitor", "Local Notifications API"],

    problem: "Most to-do apps overwhelm users with features. I wanted something that gets out of the way and lets you focus on what matters today.",
    solution: "A single-screen task list with category icons, reminders, and a clean detail view — nothing extra.",

    highlights: [
      { title: "Native notifications", desc: "Used Capacitor's LocalNotifications plugin to remind users at the exact time they set." },
      { title: "Category system", desc: "5 icon categories (home, shopping, social, work, creative) give tasks context at a glance without text clutter." },
      { title: "Task detail view", desc: "A bottom-sheet detail view shows full notes and completion status without navigating away." },
    ],

    learnings: "Building a cross-platform app with Capacitor taught me how to bridge web APIs with native device features. The biggest challenge was handling notification permissions gracefully on Android.",

    
uxProcess:
      { img: '/todo/todo.png', caption: "A comprehensive look at the Todo interface: from the clean task-input modal to the categorized list view and the contextual bottom-sheet detail view." },
 userFlow: {
      diagram: "/todo/Todo userflow.png", // Use the diagram I generated for you
      desc: "This flow emphasizes a minimal-click path from app launch to task completion."
    },
  },

  osecours: {
    title: "Osecours",
    pitch: "A life-saving emergency companion app — always ready, always available.",
    role: "Solo designer & developer",
    stack: [
      "React",
      "Capacitor",
      "Cordova Call Number",
      "Geolocation API",
      "Local Notifications",
      "Capacitor Dialog",
    ],

    problem: "In a real emergency, people waste precious seconds searching for phone numbers or don't know basic first aid steps. There needed to be one app that handles both — instant calls and reliable guidance.",
    solution: "A four-tab app combining one-tap emergency calls, an SOS SMS broadcaster with GPS location, a first aid protocol library, and personal emergency contact management.",

    highlights: [
      { title: "One-tap emergency calls", desc: "Direct dial to Police, Fire, and Ambulance using the Cordova Call Number plugin — no dialer, no delay." },
      { title: "SOS with GPS location", desc: "Hold the SOS button to trigger a 5-second countdown, then send an SMS with your GPS coordinates to all saved emergency contacts." },
      { title: "First aid protocol library", desc: "Curated resources for CPR, choking, bleeding, burns, fractures, and stroke — linking to official safety organization guides." },
      { title: "Country-aware contacts", desc: "Detects the user's country (Kenya shown) and surfaces the correct local emergency numbers alongside personal contacts." },
    ],

    learnings: "Integrating native phone calls and SMS with GPS required juggling three different Capacitor/Cordova plugin systems. The hardest part was ensuring the SOS flow — countdown, location fetch, SMS compose — worked reliably even with slow GPS locks or denied permissions.",

    uxProcess:
      { img: '/osecours/osecours.png', caption: "Dashboard overview showing the one-tap emergency call triggers, SOS activation sequence, and the fast accessible first aid library." },
 userFlow: {
      diagram: "/osecours/Osecours userflow.png", // Use the diagram I generated for you
      desc: "This flow emphasizes a minimal-click path from app launch to task completion."
    },
  },

  aura: {
    title: "Aura",
    pitch: "A guided meditation and mindfulness app that helps you find calm in your busy day.",
    role: "Solo designer & developer",
    stack: [
      "React",
      "Capacitor",
      "Native Audio",
      "Capacitor Haptics",
      "Local Notifications",
      "Google Sign-In",
    ],

    problem: "Meditation apps are either too complex, too expensive, or too generic. People who want to reduce stress or sleep better need something personal and friction-free — not a subscription wall.",
    solution: "A goal-based onboarding flow feeds into a personalized home feed. Users pick sessions from a searchable library, track streaks and progress, and get nudged back by smart notifications — all with haptic feedback that makes the experience feel native.",

    highlights: [
      { title: "Goal-based onboarding", desc: "Users select their goals — reduce stress, sleep better, improve focus, reduce anxiety — and the home feed adapts recommendations accordingly." },
      { title: "Native audio playback", desc: "Sessions play via the Capacitor Native Audio plugin, so audio continues in the background even when the screen locks." },
      { title: "Streak & progress tracking", desc: "A weekly activity chart tracks day streaks, active days, total time, and finished sessions to keep users motivated." },
      { title: "Google Sign-In", desc: "Authentication via Capacitor Google Auth gives users a frictionless login without managing a password." },
      { title: "Haptic feedback", desc: "Subtle vibrations on session start, completion, and goal selection make interactions feel intentional and grounded." },
    ],

    learnings: "Managing background audio on Android with Native Audio required careful lifecycle handling — pausing on app background, resuming on foreground, and cleaning up on session end. Combining Google Sign-In with local notification scheduling also meant juggling auth state before any personalized reminders could fire.",

 uxProcess:
      { img: '/aura/aura.png', caption: "UI showcase demonstrating the goal-based onboarding flow, the personalized session home feed, and the visual progress tracking dashboard." },
 userFlow: {
      diagram: "/aura/Aura userflow.png", // Use the diagram I generated for you
      desc: "This flow emphasizes a minimal-click path from app launch to task completion."
    },
  },
};