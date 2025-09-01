export const languages = {
  javascript: "JavaScript",
  python: "Python",
  "c++": "C++",
  "c#": "C#",
  c: "C",
  java: "Java",
  go: "Go",
  json: "JSON",
  html: "HTML",
  css: "CSS",
  php: "PHP",
  typescript: "TypeScript/TSX",
}



export const codeSnippets = {
  javascript: `function greet(name) {
  console.log("Hello, " + name + "!");
}

function sum(a, b) {
  return a + b;
}

const user = "Alice";
greet(user);
console.log("Sum:", sum(5, 3));`,

  python: `def greet(name):
    print(f"Hello, {name}!")

def sum_numbers(a, b):
    return a + b

user = "Bob"
greet(user)
print("Sum:", sum_numbers(4, 6))`,

  "c++": `#include <iostream>
using namespace std;

int sum(int a, int b) {
  return a + b;
}

int main() {
  cout << "Hello, World!" << endl;
  cout << "Sum: " << sum(5, 3) << endl;
  return 0;
}`,

  "c#": `using System;

class Program {
  static void Greet(string name) {
    Console.WriteLine("Hello, " + name + "!");
  }

  static int Sum(int a, int b) {
    return a + b;
  }

  static void Main() {
    Greet("Charlie");
    Console.WriteLine("Sum: " + Sum(6, 2));
  }
}`,

  c: `#include <stdio.h>

int sum(int a, int b) {
  return a + b;
}

int main() {
  printf("Hello, World!\\n");
  printf("Sum: %d\\n", sum(4, 5));
  return 0;
}`,

  java: `public class Main {
  public static void greet(String name) {
    System.out.println("Hello, " + name + "!");
  }

  public static int sum(int a, int b) {
    return a + b;
  }

  public static void main(String[] args) {
    greet("Diana");
    System.out.println("Sum: " + sum(7, 8));
  }
}`,

  go: `package main

import "fmt"

func greet(name string) {
  fmt.Println("Hello,", name)
}

func sum(a int, b int) int {
  return a + b
}

func main() {
  greet("Eve")
  fmt.Println("Sum:", sum(3, 9))
}`,

  json: `{
  "name": "John Doe",
  "age": 30,
  "email": "john@example.com",
  "isActive": true,
  "skills": ["JavaScript", "Python", "Go"],
  "address": {
    "city": "New York",
    "zip": "10001"
  }
}`,

  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sample Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample paragraph.</p>
  <button>Click Me</button>
</body>
</html>`,

  css: `body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #333;
}

p {
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
}`,

  php: `<?php
function greet($name) {
  echo "Hello, $name!\\n";
}

function sum($a, $b) {
  return $a + $b;
}

greet("Frank");
echo "Sum: " . sum(10, 20);
?>`,

  typescript: `function greet(name: string): void {
  console.log("Hello, " + name + "!");
}

function sum(a: number, b: number): number {
  return a + b;
}

const user: string = "Grace";
greet(user);
console.log("Sum:", sum(2, 6));`
};

export const themes = {
    Hyper: {
      background: "bg-gradient-to-br from-fuchsia-500 via-red-600 to-orange-400",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css",
    },
    Oceanic: {
      background: "bg-gradient-to-br from-green-300 via-blue-500 to-purple-600",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/material-darker.min.css",
    },
    Candy: {
      background: "bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/chalk.min.css",
    },
    Sublime: {
      background: "bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-500",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css",
    },
    Horizon: {
      background: "bg-gradient-to-br from-orange-500 to-yellow-300",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/monokai-sublime.min.css",
    },
    Coral: {
      background: "bg-gradient-to-br from-blue-400 to-emerald-400",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/tokyo-night-dark.min.css",
    },
    Peach: {
      background: "bg-gradient-to-br from-rose-400 to-orange-300",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/zenburn.min.css",
    },
    Flamingo: {
      background: "bg-gradient-to-br from-pink-400 to-pink-600",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/panda-syntax-dark.min.css",
    },
    Gotham: {
      background: "bg-gradient-to-br from-gray-700 via-gray-900 to-black",
   
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/black-metal-dark-funeral.min.css",
    },
    Ice: {
      background: "bg-gradient-to-br from-rose-100 to-teal-100",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/ashes.min.css",
    },
    Midnight: {
      background: "bg-gradient-to-br from-black via-gray-800 to-gray-900",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/dracula.min.css",
    },
    Forest: {
      background: "bg-gradient-to-br from-green-700 via-green-500 to-green-300",
      theme:
        "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/base16/solarized-dark.min.css",
    },
  }


  export const fonts = {
  JetBrainsMono: {
    name: "JetBrains Mono",
    src: "https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap",
  },
  IDBFactorynconsolata: {
    name: "Inconsolata",
    src: "https://fonts.googleapis.com/css2?family=Inconsolata&display=swap",
  },
  FiraCode: {
    name: "Fira Code",
    src: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
  },
  CascadiaCode: {
    name: "Cascadia Code",
    src: "https://cdn.jsdelivr.net/npm/@fontsource/cascadia-code@4.2.1/index.min.css",
  },
  VictorMono: {
    name: "Victor Mono",
    src: "https://fonts.googleapis.com/css2?family=Victor+Mono&display=swap",
  },
  SourceCodePro: {
    name: "Source Code Pro",
    src: "https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap",
  },
  IbmPlexMono: {
    name: "IBM Plex Mono",
    src: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap",
  },
  RobotoMono: {
    name: "Roboto Mono",
    src: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap",
  },
  UbuntuMono: {
    name: "Ubuntu Mono",
    src: "https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap",
  },
  SpaceMono: {
    name: "Space Mono",
    src: "https://fonts.googleapis.com/css2?family=Space+Mono&display=swap",
  },
  CourierPrime: {
    name: "Courier Prime",
    src: "https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap",
  },
  AnonymousPro: {
    name: "Anonymous Pro",
    src: "https://fonts.googleapis.com/css2?family=Anonymous+Pro&display=swap",
  },
  OxygenMono: {
    name: "Oxygen Mono",
    src: "https://fonts.googleapis.com/css2?family=Oxygen+Mono&display=swap",
  },
  RedHatMono: {
    name: "Red Hat Mono",
    src: "https://fonts.googleapis.com/css2?family=Red+Hat+Mono&display=swap",
  },
}