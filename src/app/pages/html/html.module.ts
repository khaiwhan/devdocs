import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HtmlRoutingModule } from './html-routing.module';
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
import { ButtonComponent } from './button/button.component';
import { HtmlLayoutModule } from 'src/app/layout/component/html-layout/html-layout.module';

@NgModule({
  declarations: [
    HtmlComponent,
    CommentComponent,
    DoctypeComponent,
    AComponent,
    AbbrComponent,
    AddressComponent,
    AreaComponent,
    ArticleComponent,
    AsideComponent,
    AudioComponent,
    BComponent,
    BaseComponent,
    BdiComponent,
    BdoComponent,
    BlockquoteComponent,
    BodyComponent,
    BrComponent,
    ButtonComponent,
    CanvasComponent,
    CaptionComponent,
    CiteComponent,
    CodeComponent,
    ColComponent,
    ColgroupComponent,
    DatalistComponent,
    DdComponent,
    DelComponent,
    DetailsComponent,
    DfnComponent,
    DialogComponent,
    DivComponent,
    DlComponent,
    DtComponent,
    EmComponent,
    EmbedComponent,
    FieldsetComponent,
    FigcaptionComponent,
    FigureComponent,
    FooterComponent,
    FormComponent,
    HComponent,
    HeadComponent,
    HeaderComponent,
    HgroupComponent,
    HrComponent,
    IframeComponent,
    ImgComponent,
    InputComponent,
    InsComponent,
    KbdComponent,
    KeygenComponent,
    LabelComponent,
    LegendComponent,
    LiComponent,
    LinkComponent,
    MainComponent,
    MapComponent,
    MarkComponent,
    MenuComponent,
    MenuitemComponent,
    MetaComponent,
    MeterComponent,
    NavComponent,
    NoscriptComponent,
    ObjectComponent,
    OlComponent,
    OptgroupComponent,
    OptionComponent,
    OutputComponent,
    PComponent,
    ParamComponent,
    PreComponent,
    ProgressComponent,
    QComponent,
    RpComponent,
    RtComponent,
    RubyComponent,
    SComponent,
    SampComponent,
    ScriptComponent,
    SectionComponent,
    SelectComponent,
    SmallComponent,
    SourceComponent,
    SpanComponent,
    StrongComponent,
    StyleComponent,
    SubComponent,
    SummaryComponent,
    SupComponent,
    TableComponent,
    TbodyComponent,
    TdComponent,
    TextareaComponent,
    TfootComponent,
    ThComponent,
    TheadComponent,
    TimeComponent,
    TitleComponent,
    TrComponent,
    TrackComponent,
    UComponent,
    UlComponent,
    VarComponent,
    VideoComponent,
    WbrComponent,
  ],
  imports: [
    CommonModule,
    HtmlRoutingModule,
    HtmlLayoutModule
  ],
})
export class HtmlModule { }
