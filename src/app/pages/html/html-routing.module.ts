import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from './html.component';
import { CommentComponent } from './comment/comment.component';
import { DoctypeComponent } from './doctype/doctype.component';
import { AComponent } from './a/a.component';
import { AbbrComponent } from './abbr/abbr.component';
import { AddressComponent } from './address/address.component';
import { AreaComponent } from './area/area.component';
import { ArticleComponent } from './article/article.component';
import { AsideComponent } from './aside/aside.component';
import { AudioComponent } from './audio/audio.component';
import { BComponent } from './b/b.component';
import { BaseComponent } from './base/base.component';
import { BdiComponent } from './bdi/bdi.component';
import { BdoComponent } from './bdo/bdo.component';
import { BlockquoteComponent } from './blockquote/blockquote.component';
import { BodyComponent } from './body/body.component';
import { BrComponent } from './br/br.component';
import { ButtonComponent } from './button/button.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CaptionComponent } from './caption/caption.component';
import { CiteComponent } from './cite/cite.component';
import { CodeComponent } from './code/code.component';
import { ColComponent } from './col/col.component';
import { ColgroupComponent } from './colgroup/colgroup.component';
import { DatalistComponent } from './datalist/datalist.component';
import { DdComponent } from './dd/dd.component';
import { DelComponent } from './del/del.component';
import { DetailsComponent } from './details/details.component';
import { DfnComponent } from './dfn/dfn.component';
import { DialogComponent } from './dialog/dialog.component';
import { DivComponent } from './div/div.component';
import { DlComponent } from './dl/dl.component';
import { DtComponent } from './dt/dt.component';
import { EmComponent } from './em/em.component';
import { EmbedComponent } from './embed/embed.component';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { FigcaptionComponent } from './figcaption/figcaption.component';
import { FigureComponent } from './figure/figure.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HComponent } from './h/h.component';
import { HeadComponent } from './head/head.component';
import { HeaderComponent } from './header/header.component';
import { HgroupComponent } from './hgroup/hgroup.component';
import { HrComponent } from './hr/hr.component';
import { IframeComponent } from './iframe/iframe.component';
import { ImgComponent } from './img/img.component';
import { InputComponent } from './input/input.component';
import { InsComponent } from './ins/ins.component';
import { KbdComponent } from './kbd/kbd.component';
import { KeygenComponent } from './keygen/keygen.component';
import { LabelComponent } from './label/label.component';
import { LegendComponent } from './legend/legend.component';
import { LiComponent } from './li/li.component';
import { LinkComponent } from './link/link.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { MarkComponent } from './mark/mark.component';
import { MenuComponent } from './menu/menu.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { MetaComponent } from './meta/meta.component';
import { MeterComponent } from './meter/meter.component';
import { NavComponent } from './nav/nav.component';
import { NoscriptComponent } from './noscript/noscript.component';
import { ObjectComponent } from './object/object.component';
import { OlComponent } from './ol/ol.component';
import { OptgroupComponent } from './optgroup/optgroup.component';
import { OptionComponent } from './option/option.component';
import { OutputComponent } from './output/output.component';
import { PComponent } from './p/p.component';
import { ParamComponent } from './param/param.component';
import { PreComponent } from './pre/pre.component';
import { ProgressComponent } from './progress/progress.component';
import { QComponent } from './q/q.component';
import { RpComponent } from './rp/rp.component';
import { RtComponent } from './rt/rt.component';
import { RubyComponent } from './ruby/ruby.component';
import { SComponent } from './s/s.component';
import { SampComponent } from './samp/samp.component';
import { ScriptComponent } from './script/script.component';
import { SectionComponent } from './section/section.component';
import { SelectComponent } from './select/select.component';
import { SmallComponent } from './small/small.component';
import { SourceComponent } from './source/source.component';
import { SpanComponent } from './span/span.component';
import { StrongComponent } from './strong/strong.component';
import { StyleComponent } from './style/style.component';
import { SubComponent } from './sub/sub.component';
import { SummaryComponent } from './summary/summary.component';
import { SupComponent } from './sup/sup.component';
import { TableComponent } from './table/table.component';
import { TbodyComponent } from './tbody/tbody.component';
import { TdComponent } from './td/td.component';
import { TextareaComponent } from './textarea/textarea.component';
import { TfootComponent } from './tfoot/tfoot.component';
import { ThComponent } from './th/th.component';
import { TheadComponent } from './thead/thead.component';
import { TimeComponent } from './time/time.component';
import { TitleComponent } from './title/title.component';
import { TrComponent } from './tr/tr.component';
import { TrackComponent } from './track/track.component';
import { UComponent } from './u/u.component';
import { UlComponent } from './ul/ul.component';
import { VarComponent } from './var/var.component';
import { VideoComponent } from './video/video.component';
import { WbrComponent } from './wbr/wbr.component';

const routes: Routes = [
  {path:'',component:HtmlComponent},
  {path:'comment',component:CommentComponent},
  {path:'doctype',component:DoctypeComponent},
  {path:'a',component:AComponent},
  {path:'abbr',component:AbbrComponent},
  {path:'address',component:AddressComponent},
  {path:'area',component:AreaComponent},
  {path:'article',component:ArticleComponent},
  {path:'aside',component:AsideComponent},
  {path:'audio',component:AudioComponent},
  {path:'b',component:BComponent},
  {path:'base',component:BaseComponent},
  {path:'bdi',component:BdiComponent},
  {path:'bdo',component:BdoComponent},
  {path:'blockquote',component:BlockquoteComponent},
  {path:'body',component:BodyComponent},
  {path:'br',component:BrComponent},
  {path:'button',component:ButtonComponent},
  {path:'canvas',component:CanvasComponent},
  {path:'caption',component:CaptionComponent},
  {path:'cite',component:CiteComponent},
  {path:'code',component:CodeComponent},
  {path:'col',component:ColComponent},
  {path:'colgroup',component:ColgroupComponent},
  {path:'datalist',component:DatalistComponent},
  {path:'dd',component:DdComponent},
  {path:'del',component:DelComponent},
  {path:'details',component:DetailsComponent},
  {path:'dfn',component:DfnComponent},
  {path:'dialog',component:DialogComponent},
  {path:'div',component:DivComponent},
  {path:'dl',component:DlComponent},
  {path:'dt',component:DtComponent},
  {path:'em',component:EmComponent},
  {path:'embed',component:EmbedComponent},
  {path:'fieldset',component:FieldsetComponent},
  {path:'figcaption',component:FigcaptionComponent},
  {path:'figure',component:FigureComponent},
  {path:'footer',component:FooterComponent},
  {path:'form',component:FormComponent},
  {path:'h',component:HComponent},
  {path:'head',component:HeadComponent},
  {path:'header',component:HeaderComponent},
  {path:'hgroup',component:HgroupComponent},
  {path:'hr',component:HrComponent},
  {path:'iframe',component:IframeComponent},
  {path:'img',component:ImgComponent},
  {path:'input',component:InputComponent},
  {path:'ins',component:InsComponent},
  {path:'kbd',component:KbdComponent},
  {path:'keygen',component:KeygenComponent},
  {path:'label',component:LabelComponent},
  {path:'legend',component:LegendComponent},
  {path:'li',component:LiComponent},
  {path:'link',component:LinkComponent},
  {path:'main',component:MainComponent},
  {path:'map',component:MapComponent},
  {path:'mark',component:MarkComponent},
  {path:'menu',component:MenuComponent},
  {path:'menuitem',component:MenuitemComponent},
  {path:'meta',component:MetaComponent},
  {path:'meter',component:MeterComponent},
  {path:'nav',component:NavComponent},
  {path:'noscript',component:NoscriptComponent},
  {path:'object',component:ObjectComponent},
  {path:'ol',component:OlComponent},
  {path:'optgroup',component:OptgroupComponent},
  {path:'option',component:OptionComponent},
  {path:'output',component:OutputComponent},
  {path:'p',component:PComponent},
  {path:'param',component:ParamComponent},
  {path:'pre',component:PreComponent},
  {path:'progress',component:ProgressComponent},
  {path:'q',component:QComponent},
  {path:'rp',component:RpComponent},
  {path:'rt',component:RtComponent},
  {path:'ruby',component:RubyComponent},
  {path:'s',component:SComponent},
  {path:'samp',component:SampComponent},
  {path:'script',component:ScriptComponent},
  {path:'section',component:SectionComponent},
  {path:'select',component:SelectComponent},
  {path:'small',component:SmallComponent},
  {path:'source',component:SourceComponent},
  {path:'span',component:SpanComponent},
  {path:'strong',component:StrongComponent},
  {path:'style',component:StyleComponent},
  {path:'sub',component:SubComponent},
  {path:'summary',component:SummaryComponent},
  {path:'sup',component:SupComponent},
  {path:'table',component:TableComponent},
  {path:'tbody',component:TbodyComponent},
  {path:'td',component:TdComponent},
  {path:'textarea',component:TextareaComponent},
  {path:'tfoot',component:TfootComponent},
  {path:'th',component:ThComponent},
  {path:'thead',component:TheadComponent},
  {path:'time',component:TimeComponent},
  {path:'title',component:TitleComponent},
  {path:'tr',component:TrComponent},
  {path:'track',component:TrackComponent},
  {path:'u',component:UComponent},
  {path:'ul',component:UlComponent},
  {path:'var',component:VarComponent},
  {path:'video',component:VideoComponent},
  {path:'wbr',component:WbrComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
