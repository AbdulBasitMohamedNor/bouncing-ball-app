import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatStepperModule
  ],
  selector: 'app-root',
  template: `
    <!-- Hero Section -->
    <div class="hero">
      <h1>Become a Legend Keeper</h1>
      <h2>Join our exclusive circle for early access, behind-the-scenes insights, and premium perks.</h2>
      <button mat-raised-button class="cta-button">Join the VIP Ranks</button>
    </div>

    <!-- Key Benefits Grid -->
    <section class="benefits">
      <mat-grid-list cols="3" gutterSize="16px">
        <mat-grid-tile *ngFor="let benefit of benefits">
          <mat-card>
            <mat-card-title>{{ benefit.title }}</mat-card-title>
            <mat-card-content>{{ benefit.description }}</mat-card-content>
          </mat-card>
        </mat-grid-tile>
      </mat-grid-list>
    </section>

    <!-- How It Works Timeline -->
    <section class="timeline">
      <mat-horizontal-stepper linear>
        <mat-step>
          <ng-template matStepLabel>Sign Up & Activate</ng-template>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Unlock Your QR-Code Portal</ng-template>
        </mat-step>
        <mat-step>
          <ng-template matStepLabel>Explore Exclusive Drops & Stories</ng-template>
        </mat-step>
      </mat-horizontal-stepper>
    </section>

    <!-- Testimonials Carousel -->
    <section class="testimonials">
      <mat-card>
        <mat-card-content>
          <p>{{ testimonials[currentTestimonialIndex] }}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-icon-button (click)="prevTestimonial()">
            <mat-icon>chevron_left</mat-icon>
          </button>
          <button mat-icon-button (click)="nextTestimonial()">
            <mat-icon>chevron_right</mat-icon>
          </button>
        </mat-card-actions>
      </mat-card>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <a href="/support">Questions?</a>
      <div class="social-icons">
        <button mat-icon-button aria-label="Instagram"><mat-icon>instagram</mat-icon></button>
        <button mat-icon-button aria-label="Facebook"><mat-icon>facebook</mat-icon></button>
        <button mat-icon-button aria-label="Email"><mat-icon>email</mat-icon></button>
      </div>
    </footer>
  `,
  styles: [
    `
      /* Hero Section */
      .hero {
  background: url(public/imag2.png) no-repeat center center;
        background-size: cover;
        position: relative;
        color: #fff;
        height: 60vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
      }
      .hero::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
      }
      .hero h1 {
        font-family: 'Times New Roman', serif;
        font-size: 3rem;
        margin: 0;
      }
      .hero h2 {
        font-family: Arial, sans-serif;
        font-size: 1.5rem;
        margin: 0.5rem 0 1.5rem;
      }
      .cta-button {
        background: #fdd835;
        color: #111;
        font-weight: 600;
      }

      /* Benefits Grid */
      .benefits {
        padding: 2rem;
        background: #222;
      }
      mat-card {
        background: #333;
        color: #fff;
        padding: 1rem;
      }
      mat-card-title {
        font-family: 'Times New Roman', serif;
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }
      mat-card-content {
        font-family: Arial, sans-serif;
        font-size: 1rem;
      }

      /* Timeline */
      .timeline {
        padding: 2rem;
        background: #333;
      }
      mat-horizontal-stepper {
        background: transparent;
      }

      /* Testimonials */
      .testimonials {
        padding: 2rem;
        background: #222;
        text-align: center;
      }
      .testimonials mat-card {
        max-width: 600px;
        margin: 0 auto;
        background: #333;
      }
      .testimonials p {
        font-style: italic;
      }

      /* Footer */
      .footer {
        padding: 1rem 2rem;
        background: #111;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .footer a {
        color: #fdd835;
        text-decoration: none;
        font-family: Arial, sans-serif;
      }
      .social-icons button {
        margin-left: 0.5rem;
      }
    `
  ]
})
export class App {
  benefits = [
    {
      title: 'Early Access to New Releases',
      description: 'Get first dibs on our next warrior designs.'
    },
    {
      title: 'Exclusive Content',
      description: 'Deep-dive stories, interviews with historians, members-only webinars.'
    },
    {
      title: 'VIP-Only Discounts & Gifts',
      description: 'Up to 20% off, free limited-edition mini lamp.'
    }
  ];

  testimonials = [
    '“The designs blew my mind – pure artistry!”',
    '“The content is so rich; I feel part of a real community.”',
    '“VIP perks are unbeatable – love my mini lamp gift!”'
  ];
  currentTestimonialIndex = 0;

  nextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  prevTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }
}
