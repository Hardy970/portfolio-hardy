import { Component, Input, Output, EventEmitter, signal, effect, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../models/project';
@Component({
  selector: 'app-project-modal',
  imports: [CommonModule],
  templateUrl: './project-modal.html',
  styleUrl: './project-modal.scss',
})
export class ProjectModal implements OnDestroy {
  // @Input() set project(value: Project | null) {
  //   this._project.set(value);
  //   this.currentImgIndex.set(0); // Reset l'index à l'ouverture
  //   if (value && value.images.length > 1) {
  //     this.startAutoPlay();
  //   } else {
  //     this.stopAutoPlay();
  //   }
  // }
  
  // _project = signal<Project | null>(null);
  // currentImgIndex = signal(0);
  // private interval: any;

  // ngOnDestroy() {
  //   this.stopAutoPlay();
  // }

  // startAutoPlay() {
  //   this.stopAutoPlay();
  //   this.interval = setInterval(() => {
  //     const p = this._project();
  //     if (p) {
  //       this.currentImgIndex.update(idx => (idx + 1) % p.images.length);
  //     }
  //   }, 3500); // Un peu plus rapide que le hero pour garder l'attention
  // }

  // stopAutoPlay() {
  //   if (this.interval) clearInterval(this.interval);
  // }

  // @Output() close = new EventEmitter<void>();

  // closeModal() {
  //   this.stopAutoPlay();
  //   this.close.emit();
  // }
  @Input() set project(value: Project | null) {
    this._project.set(value);
    this.currentImgIndex.set(0);
    if (value && value.images.length > 1) this.startAutoPlay();
    else this.stopAutoPlay();
  }
  
  _project = signal<Project | null>(null);
  currentImgIndex = signal(0);
  isFullscreen = signal(false); // État plein écran
  private interval: any;

  ngOnDestroy() { this.stopAutoPlay(); document.body.style.overflow = 'auto';}

  startAutoPlay() {
    this.stopAutoPlay();
    this.interval = setInterval(() => this.nextImg(), 4000);
  }

  stopAutoPlay() { if (this.interval) clearInterval(this.interval); }

  nextImg() {
    const p = this._project();
    if (p) this.currentImgIndex.update(idx => (idx + 1) % p.images.length);
  }

  prevImg() {
    const p = this._project();
    if (p) this.currentImgIndex.update(idx => (idx - 1 + p.images.length) % p.images.length);
  }

  // Navigation manuelle
  manualNext() { this.stopAutoPlay(); this.nextImg(); this.startAutoPlay(); }
  manualPrev() { this.stopAutoPlay(); this.prevImg(); this.startAutoPlay(); }

  toggleFullscreen() { this.isFullscreen.update(v => !v); }

  @Output() close = new EventEmitter<void>();
  closeModal() { this.stopAutoPlay(); this.isFullscreen.set(false); document.body.style.overflow = 'auto'; this.close.emit(); }
}
