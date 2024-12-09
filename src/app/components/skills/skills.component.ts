import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faAngular,
  faPython,
  faAws,
  faDocker
} from '@fortawesome/free-brands-svg-icons';
import {
  faDatabase,
  faServer,
  faCloud
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <section id="skills" class="py-20 relative">
      <div class="parallax-bg absolute inset-0 bg-fixed"
           style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
                  opacity: 0.1;
                  background-size: cover;
                  background-position: center;
                  transform: translateZ(-1px) scale(2);">
      </div>
      <div class="container mx-auto px-6 relative z-10">
        <h2 class="text-4xl font-bold mb-16 text-center text-gradient">Skills & Technologies</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faAngular" class="text-4xl mb-4 text-red-500"></fa-icon>
            <h3 class="text-lg font-semibold">Angular</h3>
            <p class="text-sm text-gray-400">Frontend Development</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faPython" class="text-4xl mb-4 text-blue-500"></fa-icon>
            <h3 class="text-lg font-semibold">Python</h3>
            <p class="text-sm text-gray-400">Backend Development</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faAws" class="text-4xl mb-4 text-yellow-500"></fa-icon>
            <h3 class="text-lg font-semibold">AWS Lambda</h3>
            <p class="text-sm text-gray-400">Serverless Computing</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faCloud" class="text-4xl mb-4 text-gray-400"></fa-icon>
            <h3 class="text-lg font-semibold">EC2</h3>
            <p class="text-sm text-gray-400">Cloud Infrastructure</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faDatabase" class="text-4xl mb-4 text-green-500"></fa-icon>
            <h3 class="text-lg font-semibold">MongoDB</h3>
            <p class="text-sm text-gray-400">NoSQL Database</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faDatabase" class="text-4xl mb-4 text-blue-400"></fa-icon>
            <h3 class="text-lg font-semibold">SQL</h3>
            <p class="text-sm text-gray-400">Relational Database</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faServer" class="text-4xl mb-4 text-purple-500"></fa-icon>
            <h3 class="text-lg font-semibold">Serverless</h3>
            <p class="text-sm text-gray-400">Cloud Architecture</p>
          </div>

          <div class="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300">
            <fa-icon [icon]="faDocker" class="text-4xl mb-4 text-blue-500"></fa-icon>
            <h3 class="text-lg font-semibold">Docker</h3>
            <p class="text-sm text-gray-400">Containerization</p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class SkillsComponent {
  faAngular = faAngular;
  faPython = faPython;
  faAws = faAws;
  faDatabase = faDatabase;
  faServer = faServer;
  faCloud = faCloud;
  faDocker = faDocker;
}
