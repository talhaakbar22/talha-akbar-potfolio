import { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  Mail,
  ExternalLink,
  Code,
  Smartphone,
  Zap,
  Users,
  Award,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }

    // Handle scroll effect for navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900 transition-all duration-700">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
            Talha Akbar
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { name: "about", icon: Users },
              { name: "projects", icon: Code },
              { name: "blog", icon: Award },
              { name: "contact", icon: Mail },
            ].map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => scrollToSection(name)}
                className="group flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 capitalize"
              >
                <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{name}</span>
              </button>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-110"
          >
            <div className="relative">
              {isDark ? (
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500" />
              ) : (
                <Moon className="h-5 w-5 rotate-0 scale-100 transition-all duration-500" />
              )}
            </div>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-green-700 dark:text-green-300">
                Available for Projects
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent leading-tight">
              <span className="bg-gradient-to-r from-purple-600 to-teal-600 bg-clip-text text-transparent">
                React Native Developer
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-medium">
              Crafting exceptional mobile experiences with 4 years of React
              Native expertise
            </p>

            <p className="text-lg text-slate-500 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              I specialize in building high-performance, scalable mobile
              applications using React Native, delivering native-quality
              experiences across iOS and Android platforms with clean,
              maintainable code.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto">
              {[
                { number: "4+", label: "Years Experience" },
                { number: "50+", label: "Apps Built" },
                { number: "99%", label: "Client Satisfaction" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("projects")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl font-semibold"
              >
                <Smartphone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                View My Apps
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-slate-300 dark:border-slate-600 px-8 py-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <a href="/files/Talha_Resume.pdf" download>
                <Button
                  variant="ghost"
                  className="group text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:bounce transition-transform" />
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              About Me
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Passionate about creating mobile solutions that make a difference
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  With 4 years of dedicated experience in React Native
                  development, I specialize in creating cross-platform mobile
                  applications that deliver native performance and exceptional
                  user experiences.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  My journey in mobile development started with native iOS and
                  Android, but I found my passion in React Native's ability to
                  bridge the gap between platforms while maintaining code
                  efficiency and rapid development cycles.
                </p>
              </div>

              {/* Key strengths */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: Zap,
                    title: "Fast Development",
                    desc: "Rapid prototyping & delivery",
                  },
                  {
                    icon: Code,
                    title: "Clean Code",
                    desc: "Maintainable & scalable",
                  },
                  {
                    icon: Smartphone,
                    title: "Cross Platform",
                    desc: "iOS & Android expertise",
                  },
                  {
                    icon: Users,
                    title: "User Focused",
                    desc: "Exceptional UX design",
                  },
                ].map(({ icon: Icon, title, desc }, index) => (
                  <div
                    key={index}
                    className="group p-4 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                  Core Technologies
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React Native",
                    "TypeScript",
                    "JavaScript",
                    "Expo",
                    "Firebase",
                    "Zustand/Jotai",
                    "Redux Toolkit",
                    "Native Modules",
                    "GraphQL",
                    "Jest",
                    "React Query",
                    "Swift",
                    "Xcode",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200/50 dark:border-blue-700/50 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 via-purple-500 to-teal-500 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-slate-900 to-slate-700 rounded-2xl flex items-center justify-center">
                  <Code className="h-24 w-24 text-white opacity-80" />
                </div>
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 px-6 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-800/30 dark:to-indigo-900/30 relative"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Featured Apps
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Showcase of mobile applications built with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Centropix",
                description:
                  "The world’s first wireless, App-Driven PEMA applicators and Frequency wearable are taking you to a whole new level of selfcare.",
                tech: [
                  "IOS",
                  "Swift",
                  "Push Notification",
                  "Firebase",
                  "Alamofire",
                  "Kingfisher",
                  "CocoaPods",
                  "Animations",
                  "RESTAPIs",
                  "CoreBluetooth",
                  "CrashReporting",
                ],
                gradient: "from-black-500 to-pink-500",
                image: "/src/assets/centropix.png", // Replace with your image path
                iosUrl: "https://apps.apple.com/app/YOUR_IOS_APP_ID",
                androidUrl:
                  "https://play.google.com/store/apps/details?id=YOUR_ANDROID_PACKAGE",
                fallbackUrl: "https://your-website.com/download",
              },

              {
                title: "My Clique",
                description:
                  "MyClique is a place to build lasting friendships and create memories that will last a lifetime.",
                tech: [
                  "Expo",
                  "TypeScript",
                  "Push Notifications",
                  "Redux Toolkit",
                  "React Native Web",
                  "Google Places Autocomplete",
                  "FastImage",
                  "Redis",
                  "GraphQL",
                  "Apollo",
                  "CI/CD",
                  "Formik + Yup",
                ],
                gradient: "from-red-500 to-pink-500",
                image: "/src/assets/myClique.png", // Replace with your image path
                iosUrl: "https://apps.apple.com/app/YOUR_IOS_APP_ID",
                androidUrl:
                  "https://play.google.com/store/apps/details?id=YOUR_ANDROID_PACKAGE",
                fallbackUrl: "https://your-website.com/download",
              },
              {
                title: "Carvonix",
                description:
                  "Carvonix is the ultimate automotive enthusiast social platform, designed to fuel your passion and connect you with car lovers from all around the globe.",
                tech: [
                  "React Native",
                  "Stripe",
                  "Firebase",
                  "Redux",
                  "Socket.io",
                ],
                gradient: "from-black-500 to-cyan-500",
                image: "/src/assets/carvonix.png", // Replace with your image path
                iosUrl: "https://apps.apple.com/app/YOUR_IOS_APP_ID",
                androidUrl:
                  "https://play.google.com/store/apps/details?id=com.carvonixllc.carvonix",
                fallbackUrl: "https://carvonix.com/",
              },
              {
                title: "RTE",
                description:
                  "Run the Edge Community motivates people to achieve a healthy lifestyle and set goals to reach their personal best every day, all year long.",
                tech: [
                  "React Native CLI",
                  "React Native Map",
                  "Redux Toolkit",
                  "React Native Paper",
                  "Formik + Yup",
                  "Chart Kit",
                  "Pie Chart",
                  "Zustand",
                  "TypeScript",
                  "Moment.js",
                  "RTK Query",
                  "HealthKit",
                  "Vimeo",
                ],
                gradient: "from-green-500 to-emerald-500",
                image: "/src/assets/runtheedge.png", // Replace with your image path
                iosUrl: "https://apps.apple.com/app/YOUR_IOS_APP_ID",
                androidUrl:
                  "https://play.google.com/store/apps/details?id=YOUR_ANDROID_PACKAGE",
                fallbackUrl: "https://your-website.com/download",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-slate-200/50 dark:border-slate-700/50"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover z-10"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button
                  onClick={() => {
                    const userAgent = navigator.userAgent.toLowerCase();
                    if (/iphone|ipad|ipod/.test(userAgent)) {
                      window.open(project.iosUrl, "_blank");
                    } else if (/android/.test(userAgent)) {
                      window.open(project.androidUrl, "_blank");
                    } else {
                      window.open(project.fallbackUrl, "_blank");
                    }
                  }}
                  variant="ghost"
                  className="w-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 font-semibold"
                >
                  View Details{" "}
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
              Latest Insights
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Sharing knowledge and best practices in mobile development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "React Native Performance Optimization",
                excerpt:
                  "Explore advanced methods for building lightning-fast React Native apps with smooth performance and great UX.",
                date: "August 8, 2025",
                readTime: "9 min read",
                category: "Performance",
                url: "https://medium.com/@talha.akbar366/react-native-performance-optimization-4dab54891a85",
              },
              {
                title: "Mastering Video Animations in React Native.",
                excerpt:
                  "Learn to create smooth video animations in React Native with optimal performance and seamless gestures.",
                date: "July 2, 2025",
                readTime: "11 min read",
                category: "Animation",
                url: "https://medium.com/@talha.akbar366/mastering-video-animations-in-react-native-60b5a558e918",
              },
              {
                title: "Mastering React Native’s New Architecture",
                excerpt:
                  "Understand why React Native’s New Architecture changes the game, offering faster apps and cleaner codebases.",
                date: "June 26, 2025",
                readTime: "2 min read",
                category: "New Architecture",
                url: "https://medium.com/@talha.akbar366/mastering-react-natives-new-architecture-fabric-turbomodules-strict-typescript-api-2025-e902db77b8f2",
              },
            ].map((post, index) => (
              <a href={post?.url} target="_blank" rel="noopener noreferrer">
                <article
                  key={index}
                  className="group bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-200/50 dark:border-slate-700/50"
                >
                  <div className="h-32 bg-gradient-to-br from-blue-100 via-purple-100 to-teal-100 dark:from-blue-900/30 dark:via-purple-900/30 dark:to-teal-900/30 rounded-2xl mb-6 relative overflow-hidden">
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/80 dark:bg-slate-800/80 rounded-full text-xs font-medium text-slate-600 dark:text-slate-400">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-medium">{post.date}</span>
                    <span className="flex items-center">
                      <Award className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-800/30 dark:to-indigo-900/30"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 dark:text-white">
            Let's Create Something
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
            Have a mobile app idea that could change the world? With 4 years of
            React Native expertise, I'd love to help bring it to life. Let's
            build something users will love.
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            {[
              {
                image: "../assets/mail.png", // Path to your email icon image
                href: "mailto:talha.akbar366@gmail.com",
                label: "Email",
                color: "from-blue-500 to-cyan-500",
              },
              {
                image: "./src/assets/github.png",
                href: "https://github.com/talhaakbar22",
                label: "GitHub",
                color: "from-slate-600 to-slate-800",
              },
              {
                image: "./src/assets/linkedIn.png",
                href: "https://linkedin.com/in/talhaakbar",
                label: "LinkedIn",
                color: "from-blue-600 to-blue-800",
              },
              {
                image: "./src/assets/whatsapp.png",
                href: "https://wa.me/923214964987?text=Hello! I want to discuss starting a mobile project.",
                color: "from-green-500 to-green-600",
              },
              {
                image: "./src/assets/stackoverflow.png",
                href: "https://stackoverflow.com/users/YOUR_USER_ID", // Replace with your Stack Overflow profile
                label: "Stack Overflow",
                color: "from-orange-500 to-orange-700",
              },
            ].map(({ image, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group p-5 bg-gradient-to-br ${color} rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-110`}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={image}
                  alt={label}
                  className="h-9 w-9 object-contain filter brightness-0 invert group-hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg font-semibold"
            onClick={() => {
              const phoneNumber = "923214964987"; // With country code (e.g., 14151234567)
              const message =
                "Hello! I want to discuss starting a mobile project.";
              const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                message
              )}`;
              window.open(url, "_blank");
            }}
          >
            <Zap className="mr-2 h-5 w-5" />
            Start Your Mobile Project
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent mb-4">
              Talha Akbar
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              © 2025 Talha Akbar. React Native Developer with 4+ years of
              experience. Crafted with passion using React and Tailwind CSS.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
