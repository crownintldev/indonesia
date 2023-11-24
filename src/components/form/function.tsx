import Header from "../header/Header";
import Box from "../Box/Box";
import CheckedBox from "../checkbox/CheckedBox";

// same page components start
const Mention = ({
  component,
  mention,
}: {
  component: any;
  mention: string;
}) => (
  <div className="flex">
    <div className="flex space-x-1 ">{component}</div>
    <span className="ms-[1px] font-medium">{mention}</span>
  </div>
);
const MentionContainer = ({
  tspace,
  text,
  item,
  space,
  wf,
}: {
  tspace?: boolean;
  wf?: boolean;
  text?: string;
  item: string[];
  space?: boolean;
}) => (
  <ContentOutline>
    <Title tspace={tspace && tspace}>{text}</Title>
    <Boxes wf={wf}>
      <p>:</p>
      <div className={`w-full `}>
        <div className={`flex ${space ? "space-x-4" : "justify-between"} `}>
          {item.map((item: any, i: any) => (
            <Mention key={i} component={<CheckedBox />} mention={item} />
          ))}
        </div>
      </div>
    </Boxes>
  </ContentOutline>
);

const FullLineBox = ({ text, italic }: { text: string; italic?: boolean }) => (
  <ContentOutline>
    <Title>
      <span className={`${italic && "italic"}`}>{text}</span>
    </Title>
    <Boxes wf>
      <p>:</p>
      <Box b={28} />
    </Boxes>
  </ContentOutline>
);

const DashBoxes = ({
  title,
  item,
  wf,
  notitle,
}: {
  wf?: boolean;
  title?: string;
  item: number[];
  notitle?: boolean;
}) => (
  <ContentOutline>
    {!notitle && <Title>{title}</Title>}
    <Boxes wf={wf}>
      {!notitle && <p>:</p>}
      {item.map((quantity, i) => (
        <>
          <Box b={quantity} key={i} />
          {i !== item.length - 1 && <p>-</p>}
        </>
      ))}
    </Boxes>
  </ContentOutline>
);
const MentionDashBoxes = ({
  title,
  item,
}: {
  title: string;
  item: number[];
}) => (
  <ContentOutline>
    <Title>{title}</Title>
    <Boxes wf>
      <Mention
        component={
          <>
            <p>:</p>
            {item.map((quantity, i) => (
              <>
                <Box b={quantity} key={i} />
                {i !== item.length - 1 && <p>-</p>}
              </>
            ))}
          </>
        }
        mention="(DD-MM-YYYY)"
      />
    </Boxes>
  </ContentOutline>
);
// **--end same page components

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// depends styles
const Title = ({
  children,
  tspace,
}: {
  children: React.ReactNode;
  tspace?: boolean;
}) => (
  <div className={`font-medium   ${tspace ? "w-[250px]" : "w-[150px]"}`}>
    <div>{children}</div>
  </div>
);
const HeadingItalic = ({ text }: { text: string }) => (
  <h4 className=" font-bold text-[9px] italic mt-1">{text}</h4>
);

const Heading = ({ index, text }: { index: string; text: string }) => (
  <div className="flex relative uppercase items-center text-[9px] mt-1">
    <span className="absolute -left-3 font-bold">{index}</span>
    <h4 className=" font-bold  ">{text}</h4>
  </div>
);
const Boxes = ({
  children,
  wf,
}: {
  children: React.ReactNode;
  wf?: boolean;
}) => (
  //  320+128 = 328
  <div>
    <div className={``}>
      <div className={`${wf ? "w-full" : " "} `}>
        <div className="flex space-x-1 items-center">{children}</div>
      </div>
    </div>
  </div>
);
const ContentOutline = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center text-[8px] space-y-[5px] leading-[10px]">
    {children}
  </div>
);
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[610px] mx-auto space-y-[1px] ">
    <div className="border border-black pb-1 py-2">
      <div className="ms-[2.5%] h-16 mx-auto  relative">
        <Header />
        <p className="absolute text-[10px] font-medium bottom-[1px]">NOREG</p>
      </div>
    </div>
    {/* line on header below */}

    {/* <div className=" border border-gray-900 bg-gray-900 h-[1px] w-12/12 mx-auto"></div> */}

    <div className=" w-full overflow-hidden ">{children}</div>
  </div>
);

export {
  Mention,
  MentionContainer,
  FullLineBox,
  DashBoxes,
  MentionDashBoxes,
  Title,
  HeadingItalic,
  Heading,
  Boxes,
  ContentOutline,
  Layout,
};
