import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { RetairmentComponent } from './retairment/retairment.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { Blog1Component } from './blog1/blog1.component';
import { UMudaniComponent } from './u-mudani/u-mudani.component';
import { ThemanticComponent } from './themantic/themantic.component';
import { StockBackComponent } from './stock-back/stock-back.component';
import { SelfDirectedComponent } from './self-directed/self-directed.component';
import { PricingComponent } from './pricing/pricing.component';
import { MaangedSubtabComponent } from './maanged-subtab/maanged-subtab.component';
import { InvestmentComponent } from './investment/investment.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { MudaniB2bComponent } from './mudani-b2b/mudani-b2b.component';
import { BlogPageComponent } from './blog-page/blog-page.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'retairment', component: RetairmentComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog1', component: Blog1Component },
  { path: 'u-mudani', component: UMudaniComponent },
  { path: 'themantic', component: ThemanticComponent },
  { path: 'stock-back', component: StockBackComponent },
  { path: 'self-directed', component: SelfDirectedComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'maanged-subtab', component: MaangedSubtabComponent },
  { path: 'investment', component: InvestmentComponent },
  { path: 'how-it-work', component: HowItWorkComponent },
  { path: 'mudani-B2B', component: MudaniB2bComponent },
  { path: 'blog-page', component: BlogPageComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
