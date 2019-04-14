import { Menu } from "./list-menu";

export const MENU_DATA: Menu[] = [
  {
    name:'Ajax',
    url:'ajax',
    icon:'ajax.svg'
  },
  {
    name:'Angular',
    url:'angular',
    icon:'angular.svg'
  },
  {
    name:'Arduino',
    url:'arduino',
    icon:'arduino.svg'
  },
  {
    name:'ASP.NET',
    url:'asp',
    icon:'asp.svg'
  },
  {
    name:'Bootstrap',
    url:'bootstrap',
    icon:'bootstrap.svg'
  },
  {
    name:'C#',
    url:'csharp',
    icon:'csharp.svg'
  },
  {
    name:'CSS',
    url:'css',
    icon:'css.svg'
  },
  {
    name:'DOM',
    url:'dom',
    icon:'dom.svg'
  },
  {
    name:'Firebase',
    url:'firebase',
    icon:'firebase.svg'
  },
  //#region  HTML
  {
    name: 'HTML',
    url:'html',
    icon:'html.svg',
    children: [
      {
        name: 'Attribute',
        url:'/html/attribute',
        icon:'',
        children:[
          {name:'ACCEPT',url:'/html/attribute/accept',icon:''},
          {name:'ACCEPT-CHARSET',url:'/html/acceptcharset',icon:''},
        ]
      },
      {name: '<!-- -->',url:'/html/comment',icon:''},
      {name: '<!DOCTYPE>',url:'/html/doctype',icon:''},
      {name: '<A>',url:'/html/a',icon:''},
      {name: '<ABBR>',url:'/html/abbr',icon:''},
      {name: '<ADDRESS>',url:'/html/address',icon:''},
      {name: '<AREA>',url:'/html/area',icon:''},
      {name: '<ARTICLE>',url:'/html/article',icon:''},
      {name: '<ASIDE>',url:'/html/aside',icon:''},
      {name: '<AUDIO>',url:'/html/audio',icon:''},
      {name: '<B>',url:'/html/b',icon:''},
      {name: '<BASE>',url:'/html/base',icon:''},
      {name: '<BDI>',url:'/html/bdi',icon:''},
      {name: '<BDO>',url:'/html/bdo',icon:''},
      {name: '<BLOCKQUOTE>',url:'/html/blockquote',icon:''},
      {name: '<BODY>',url:'/html/body',icon:''},
      {name: '<BR>',url:'/html/br',icon:''},
      {name: '<BUTTON>',url:'/html/button',icon:''},
      {name: '<CANVAS>',url:'/html/canvas',icon:''},
      {name: '<CAPTION>',url:'/html/caption',icon:''},
      {name: '<CITE>',url:'/html/cite',icon:''},
      {name: '<CODE>',url:'/html/code',icon:''},
      {name: '<COL>',url:'/html/col',icon:''},
      {name: '<COLGROUP>',url:'/html/colgroup',icon:''},
      {name: '<DATALIST>',url:'/html/datalist',icon:''},
      {name: '<DD>',url:'/html/dd',icon:''},
      {name: '<DEL>',url:'/html/del',icon:''},
      {name: '<DETAILS>',url:'/html/details',icon:''},
      {name: '<DFN>',url:'/html/dfn',icon:''},
      {name: '<DIALOG>',url:'/html/dialog',icon:''},
      {name: '<DIV>',url:'/html/div',icon:''},
      {name: '<DL>',url:'/html/dl',icon:''},
      {name: '<DT>',url:'/html/dt',icon:''},
      {name: '<EM>',url:'/html/em',icon:''},
      {name: '<EMBED>',url:'/html/embed',icon:''},
      {name: '<FIELDSET>',url:'/html/fieldset',icon:''},
      {name: '<FIGCAPTION>',url:'/html/figcaption',icon:''},
      {name: '<FIGURE>',url:'/html/figure',icon:''},
      {name: '<FOOTER>',url:'/html/footer',icon:''},
      {name: '<FORM>',url:'/html/form',icon:''},
      {name: '<H1> >> <H6>',url:'/html/h',icon:''},
      {name: '<HEAD>',url:'/html/head',icon:''},
      {name: '<HEADER>',url:'/html/header',icon:''},
      {name: '<HGROUP>',url:'/html/hgroup',icon:''},
      {name: '<HR>',url:'/html/hr',icon:''},
      {name: '<IFRAME>',url:'/html/iframe',icon:''},
      {name: '<IMG>',url:'/html/img',icon:''},
      {name: '<INPUT>',url:'/html/input',icon:''},
      {name: '<INS>',url:'/html/ins',icon:''},
      {name: '<KBD>',url:'/html/kbd',icon:''},
      {name: '<KEYGEN>',url:'/html/keygen',icon:''},
      {name: '<LABEL>',url:'/html/label',icon:''},
      {name: '<LEGEND>',url:'/html/legend',icon:''},
      {name: '<LI>',url:'/html/li',icon:''},
      {name: '<LINK>',url:'/html/link',icon:''},
      {name: '<MAIN>',url:'/html/main',icon:''},
      {name: '<MAP>',url:'/html/map',icon:''},
      {name: '<MARK>',url:'/html/mark',icon:''},
      {name: '<MENU>',url:'/html/menu',icon:''},
      {name: '<MENUITEM>',url:'/html/menuitem',icon:''},
      {name: '<META>',url:'/html/meta',icon:''},
      {name: '<METER>',url:'/html/meter',icon:''},
      {name: '<NAV>',url:'/html/nav',icon:''},
      {name: '<NOSCRIPT>',url:'/html/noscript',icon:''},
      {name: '<OBJECT>',url:'/html/object',icon:''},
      {name: '<OL>',url:'/html/ol',icon:''},
      {name: '<OPTGROUP>',url:'/html/optgroup',icon:''},
      {name: '<OPTION>',url:'/html/option',icon:''},
      {name: '<OUTPUT>',url:'/html/output',icon:''},
      {name: '<P>',url:'/html/p',icon:''},
      {name: '<PARAM>',url:'/html/param',icon:''},
      {name: '<PRE>',url:'/html/pre',icon:''},
      {name: '<PROGRESS>',url:'/html/progress',icon:''},
      {name: '<Q>',url:'/html/q',icon:''},
      {name: '<RP>',url:'/html/rp',icon:''},
      {name: '<RT>',url:'/html/rt',icon:''},
      {name: '<RUBY>',url:'/html/ruby',icon:''},
      {name: '<S>',url:'/html/s',icon:''},
      {name: '<SAMP>',url:'/html/samp',icon:''},
      {name: '<SCRIPT>',url:'/html/script',icon:''},
      {name: '<SECTION>',url:'/html/section',icon:''},
      {name: '<SELECT>',url:'/html/select',icon:''},
      {name: '<SMALL>',url:'/html/small',icon:''},
      {name: '<SOURCE>',url:'/html/source',icon:''},
      {name: '<SPAN>',url:'/html/span',icon:''},
      {name: '<STRONG>',url:'/html/strong',icon:''},
      {name: '<STYLE>',url:'/html/style',icon:''},
      {name: '<SUB>',url:'/html/sub',icon:''},
      {name: '<SUMMARY>',url:'/html/summary',icon:''},
      {name: '<SUP>',url:'/html/sup',icon:''},
      {name: '<TABLE>',url:'/html/table',icon:''},
      {name: '<TBODY>',url:'/html/tbody',icon:''},
      {name: '<TD>',url:'/html/td',icon:''},
      {name: '<TEXTAREA>',url:'/html/textarea',icon:''},
      {name: '<TFOOT>',url:'/html/tfoot',icon:''},
      {name: '<TH>',url:'/html/th',icon:''},
      {name: '<THEAD>',url:'/html/thead',icon:''},
      {name: '<TIME>',url:'/html/time',icon:''},
      {name: '<TITLE>',url:'/html/title',icon:''},
      {name: '<TR>',url:'/html/tr',icon:''},
      {name: '<TRACK>',url:'/html/track',icon:''},
      {name: '<U>',url:'/html/u',icon:''},
      {name: '<UL>',url:'/html/ul',icon:''},
      {name: '<VAR>',url:'/html/var',icon:''},
      {name: '<VIDEO>',url:'/html/video',icon:''},
      {name: '<WBR>',url:'/html/wbr',icon:''},
    ]
  },
  //#endregion HTML
  {
    name:'Java',
    url:'java',
    icon:'java.svg'
  },
  {
    name:'Javascript',
    url:'javascript',
    icon:'javascript.svg',
    children:[
      {name:'String',url:'string',icon:''}
    ]
  },
  {
    name:'jQuery',
    url:'jquery',
    icon:'jquery.svg'
  },
  {
    name:'JSON',
    url:'json',
    icon:'json.svg'
  },
  {
    name:'MySQL',
    url:'mysql',
    icon:'mysql.svg'
  },
  {
    name:'NodeJS',
    url:'nodejs',
    icon:'nodejs.svg'
  },
  {
    name:'PHP',
    url:'php',
    icon:'php.svg'
  },
  {
    name:'React-Native',
    url:'reactnative',
    icon:'reactnative.svg'
  },
  {
    name:'SCSS',
    url:'scss',
    icon:'scss.svg'
  },
  {
    name:'Selenium',
    url:'selenium',
    icon:'selenium.svg'
  },
  {
    name:'Socket.io',
    url:'socket',
    icon:'socket.svg'
  },
  {
    name:'Swift',
    url:'swift',
    icon:'swift.svg'
  },
  {
    name:'Typescript',
    url:'typescript',
    icon:'typescript.svg'
  },
  {
    name:'XML',
    url:'xml',
    icon:'xml.svg'
  },
];