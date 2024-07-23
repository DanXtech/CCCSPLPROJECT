import clsx from "https://cdn.skypack.dev/clsx@1.1.1";
const { useState } = React
const { useSpring, animated, config} = ReactSpring;
const { LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer, } = Recharts

const map = (value, sMin, sMax, dMin, dMax) => {
return dMin + ((value - sMin) / (sMax - sMin)) _ (dMax - dMin);
};
const pi = Math.PI;
const tau = 2 _ pi;

const employeeData = [
{
id: 1,
name: 'Esther Howard',
position: "Sale's manager USA",
transactions: 3490,
rise: true,
tasksCompleted: 3,
imgId: 0,
},

{
id: 2,
name: 'Eleanor Pena',
position: "Sale's manager Europe",
transactions: 590,
rise: false,
tasksCompleted: 5,
imgId: 2,
},

{
id: 3,
name: 'Robert Fox',
position: "Sale's manager Asia",
transactions: 2600,
rise: true,
tasksCompleted: 1,
imgId: 3,
},
];

const Countrydata = [
{ name: 'USA', rise: true, value: 21942.83, id: 1 },
{ name: 'Ireland', rise: false, value: 19710.0, id: 2 },
{ name: 'Ukraine', rise: false, value: 12320.3, id: 3 },
{ name: 'Sweden', rise: true, value: 9725.0, id: 4 },
];
const segmentationData = [
{ c1: 'Not Specified', c2: '800', c3: '#363636', color: '#535353' },
{ c1: 'Male', c2: '441', c3: '#818bb1', color: '#595f77' },
{ c1: 'Female', c2: '233', c3: '#2c365d', color: '#232942' },
{ c1: 'Other', c2: '126', c3: '#334ed8', color: '#2c3051' },
];

const sidebarItems = [
[
{ id: '0', title: 'Dashboard', notifications: false },
{ id: '1', title: 'Overview', notifications: false },
{ id: '2', title: 'Chat', notifications: 6 },
{ id: '3', title: 'Team', notifications: false },
],
[
{ id: '4', title: 'Tasks', notifications: false },
{ id: '5', title: 'Reports', notifications: false },
{ id: '6', title: 'Settings', notifications: false },
],
];

const graphData = [
'Nov',
'Dec',
'Jan',
'Feb',
'Mar',
'Apr',
'May',
'June',
'July',
].map((i) => {
const revenue = 500 + Math.random() _ 2000;
const expectedRevenue = Math.max(revenue + (Math.random() - 0.5) _ 2000, 0);
return {
name: i,
revenue,
expectedRevenue,
sales: Math.floor(Math.random() \* 500),
};
});

const App = () => {
const [showSidebar, onSetShowSidebar] = useState(false);
return (

<div className="flex">
<Sidebar
onSidebarHide={() => {
onSetShowSidebar(false);
}}
showSidebar={showSidebar}
/>
<Content
onSidebarHide={() => {
onSetShowSidebar(true);
}}
/>
</div>
);
}

function Sidebar({ onSidebarHide, showSidebar }) {
const [selected, setSelected] = useState('0');
const { dashOffset, indicatorWidth, precentage } = useSpring({
dashOffset: 26.015,
indicatorWidth: 70,
precentage: 77,
from: { dashOffset: 113.113, indicatorWidth: 0, precentage: 0 },
config: config.molasses,
});
return (

<div
className={clsx(
'fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10',
showSidebar ? 'flex' : 'hidden',
)} >
<div className="flex-shrink-0 overflow-hidden p-2">
<div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
<IconButton icon="res-react-dash-logo" className="w-10 h-10" />
<div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
React
</div>
<div className="flex-grow sm:hidden xl:block" />
<IconButton
            icon="res-react-dash-sidebar-close"
            className="block sm:hidden"
            onClick={onSidebarHide}
          />
</div>
</div>
<div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
<div className="w-full p-3 h-24 sm:h-20 xl:h-24 hidden sm:block flex-shrink-0">
<div className="bg-sidebar-card-top rounded-xl w-full h-full flex items-center justify-start sm:justify-center xl:justify-start px-3 sm:px-0 xl:px-3">
<Icon path="res-react-dash-sidebar-card" className="w-9 h-9 " />
<div className="block sm:hidden xl:block ml-3">
<div className="text-sm font-bold text-white">Sales House</div>
<div className="text-sm">General Item</div>
</div>
<div className="block sm:hidden xl:block flex-grow" />
<Icon
              path="res-react-dash-sidebar-card-select"
              className="block sm:hidden xl:block w-5 h-5"
            />
</div>
</div>
{sidebarItems[0].map((i) => (
<MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
))}
<div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
SHORTCUTS
</div>
{sidebarItems[1].map((i) => (
<MenuItem
            key={i.id}
            item={i}
            onClick={setSelected}
            selected={selected}
          />
))}
<div className="flex-grow" />
<div className="w-full p-3 h-28 hidden sm:block sm:h-20 xl:h-32">
<div
className="rounded-xl w-full h-full px-3 sm:px-0 xl:px-3 overflow-hidden"
style={{
              backgroundImage: "url('https://assets.codepen.io/3685267/res-react-dash-usage-card.svg')",
            }} >
<div className="block sm:hidden xl:block pt-3">
<div className="font-bold text-gray-300 text-sm">Used Space</div>
<div className="text-gray-500 text-xs">
Admin updated 09:12 am November 08,2020
</div>
<animated.div className="text-right text-gray-400 text-xs">
{precentage.interpolate((i) => `${Math.round(i)}%`)}
</animated.div>
<div className="w-full text-gray-300">
<svg
                  viewBox="0 0 100 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
<line
                    x1="5"
                    y1="5.25"
                    x2="95"
                    y2="5.25"
                    stroke="#3C3C3C"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
<animated.line
x1="5"
y1="5.25"
x2={indicatorWidth}
y2="5.25"
stroke="currentColor"
strokeWidth="5"
strokeLinecap="round"
/>
</svg>
</div>
</div>

            <div className="hidden sm:block xl:hidden ">
              <svg
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" fill="#2C2C2D" />
                <path
                  d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                  stroke="#3C3C3C"
                  strokeWidth="6"
                />
                <animated.path
                  d="M 28 28 m 0, -18 a 18 18 0 0 1 0 36 a 18 18 0 0 1 0 -36"
                  stroke="#fff"
                  strokeLinecap="round"
                  strokeDasharray="113.113"
                  strokeDashoffset={dashOffset}
                  strokeWidth="6"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <Image path="mock_faces_8" className="w-10 h-10" />
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            Jerry Wilson
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <Icon
            path="res-react-dash-options"
            className="block sm:hidden xl:block w-3 h-3"
          />
        </div>
      </div>
    </div>

);
}
function MenuItem({ item: { id, title, notifications }, onClick, selected }) {
return (

<div
className={clsx(
'w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer',
selected === id ? 'sidebar-item-selected' : 'sidebar-item',
)}
onClick={() => onClick(id)} >
<SidebarIcons id={id} />
<div className="block sm:hidden xl:block ml-2">{title}</div>
<div className="block sm:hidden xl:block flex-grow" />
{notifications && (
<div className="flex sm:hidden xl:flex bg-pink-600  w-5 h-5 flex items-center justify-center rounded-full mr-2">
<div className="text-white text-sm">{notifications}</div>
</div>
)}
</div>
);
}
function Content({ onSidebarHide }) {
return (
<div className="flex w-full">
<div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
.
</div>
<div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
<div className="w-full sm:flex p-2 items-end">
<div className="sm:flex-grow flex justify-between">
<div className="">
<div className="flex items-center">
<div className="text-3xl font-bold text-white">Hello David</div>
<div className="flex items-center p-2 bg-card ml-2 rounded-xl">
<Icon path="res-react-dash-premium-star" />

                  <div className="ml-2 font-bold text-premium-yellow">
                    PREMIUM
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <Icon
                  path="res-react-dash-date-indicator"
                  className="w-3 h-3"
                />
                <div className="ml-2">October 26</div>
              </div>
            </div>
            <IconButton
              icon="res-react-dash-sidebar-open"
              className="block sm:hidden"
              onClick={onSidebarHide}
            />
          </div>
          <div className="w-full sm:w-56 mt-4 sm:mt-0 relative">
            <Icon
              path="res-react-dash-search"
              className="w-5 h-5 search-icon left-3 absolute"
            />
            <form action="#" method="POST">
              <input
                type="text"
                name="company_website"
                id="company_website"
                className="pl-12 py-2 pr-2 block w-full rounded-lg border-gray-300 bg-card"
                placeholder="search"
              />
            </form>
          </div>
        </div>
        {employeeData.map(
          ({
            id,
            name,
            position,
            transactions,
            rise,
            tasksCompleted,
            imgId,
          }) => (
            <NameCard
              key={id}
              id={id}
              name={name}
              position={position}
              transactionAmount={transactions}
              rise={rise}
              tasksCompleted={tasksCompleted}
              imgId={imgId}
            />
          ),
        )}

        <div className="w-full p-2 lg:w-2/3">
          <div className="rounded-lg bg-card sm:h-80 h-60">
            <Graph />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            <TopCountries />
          </div>
        </div>

        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            <Segmentation />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card h-80">
            <Satisfication />
          </div>
        </div>
        <div className="w-full p-2 lg:w-1/3">
          <div className="rounded-lg bg-card overflow-hidden h-80">
            <AddComponent />
          </div>
        </div>
      </div>
    </div>

);
}

function NameCard({
name,
position,
transactionAmount,
rise,
tasksCompleted,
imgId,
}) {
const { transactions, barPlayhead } = useSpring({
transactions: transactionAmount,
barPlayhead: 1,
from: { transactions: 0, barPlayhead: 0 },
});
return (

<div className="w-full p-2 lg:w-1/3">
<div className="rounded-lg bg-card flex justify-between p-3 h-32">
<div className="">
<div className="flex items-center">
<Image path={`mock_faces_${imgId}`} className="w-10 h-10" />
<div className="ml-2">
<div className="flex items-center">
<div className="mr-2 font-bold text-white">{name}</div>
<Icon path="res-react-dash-tick" />
</div>
<div className="text-sm ">{position}</div>
</div>
</div>

          <div className="text-sm  mt-2">{`${tasksCompleted} from 5 tasks completed`}</div>
          <svg
            className="w-44 mt-3"
            height="6"
            viewBox="0 0 200 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="200" height="6" rx="3" fill="#2D2D2D" />
            <animated.rect
              width={barPlayhead.interpolate(
                (i) => i * (tasksCompleted / 5) * 200,
              )}
              height="6"
              rx="3"
              fill="url(#paint0_linear)"
            />
            <rect x="38" width="2" height="6" fill="#171717" />
            <rect x="78" width="2" height="6" fill="#171717" />
            <rect x="118" width="2" height="6" fill="#171717" />
            <rect x="158" width="2" height="6" fill="#171717" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#8E76EF" />
                <stop offset="1" stopColor="#3912D2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center">
          <Icon
            path={rise ? 'res-react-dash-bull' : 'res-react-dash-bear'}
            className="w-8 h-8"
          />
          <animated.div
            className={clsx(
              rise ? 'text-green-500' : 'text-red-500',
              'font-bold',
              'text-lg',
            )}
          >
            {transactions.interpolate((i) => `$${i.toFixed(2)}`)}
          </animated.div>
          <div className="text-sm ">Last 6 month</div>
        </div>
      </div>
    </div>

);
}
function Graph() {
const CustomTooltip = () => (

<div className="rounded-xl overflow-hidden tooltip-head">
<div className="flex items-center justify-between p-2">
<div className="">Revenue</div>
<Icon path="res-react-dash-options" className="w-2 h-2" />
</div>
<div className="tooltip-body text-center p-3">
<div className="text-white font-bold">$1300.50</div>
<div className="">Revenue from 230 sales</div>
</div>
</div>
);
return (
<div className="flex p-4 h-full flex-col">
<div className="">
<div className="flex items-center">
<div className="font-bold text-white">Your Work Summary</div>
<div className="flex-grow" />

          <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
          <div className="ml-2">Last 9 Months</div>
          <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background">
            ?
          </div>
        </div>
        <div className="font-bold ml-5">Nov - July</div>
      </div>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={300} data={graphData}>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#6B8DE3" />
                <stop offset="1" stopColor="#7D1C8D" />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontal={false}
              strokeWidth="6"
              stroke="#252525"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={10}
            />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
              activeDot={false}
              type="monotone"
              dataKey="expectedRevenue"
              stroke="#242424"
              strokeWidth="3"
              dot={false}
              strokeDasharray="8 8"
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

);
}

function TopCountries() {
return (

<div className="flex p-4 flex-col h-full">
<div className="flex justify-between items-center">
<div className="text-white font-bold">Top Countries</div>
<Icon path="res-react-dash-plus" className="w-5 h-5" />
</div>
<div className="">favourites</div>
{Countrydata.map(({ name, rise, value, id }) => (
<div className="flex items-center mt-3" key={id}>
<div className="">{id}</div>

          <Image path={`res-react-dash-flag-${id}`} className="ml-2 w-6 h-6" />
          <div className="ml-2">{name}</div>
          <div className="flex-grow" />
          <div className="">{`$${value.toLocaleString()}`}</div>
          <Icon
            path={
              rise ? 'res-react-dash-country-up' : 'res-react-dash-country-down'
            }
            className="w-4 h-4 mx-3"
          />
          <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
      ))}
      <div className="flex-grow" />
      <div className="flex justify-center">
        <div className="">Check All</div>
      </div>
    </div>

);
}

function Segmentation() {
return (

<div className="p-4 h-full">
<div className="flex justify-between items-center">
<div className="text-white font-bold">Segmentation</div>

        <Icon path="res-react-dash-options" className="w-2 h-2" />
      </div>
      <div className="mt-3">All users</div>
      {segmentationData.map(({ c1, c2, c3, color }) => (
        <div className="flex items-center" key={c1}>
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: color,
            }}
          />
          <div className="ml-2" style={{ color }}>
            {c1}
          </div>
          <div className="flex-grow" />
          <div className="" style={{ color }}>
            {c2}
          </div>
          <div className="ml-2 w-12 card-stack-border" />
          <div className="ml-2 h-8">
            <div
              className="w-20 h-28 rounded-lg overflow-hidden"
              style={{
                background: c3,
              }}
            >
              {c1 === 'Other' && (
                <img src="https://assets.codepen.io/3685267/res-react-dash-user-card.svg" alt="" />
              )}
            </div>
          </div>
        </div>
      ))}

      <div className="flex mt-3 px-3 items-center justify-between bg-details rounded-xl w-36 h-12">
        <div className="">Details</div>
        <Icon path="res-react-dash-chevron-right" className="w-4 h-4" />
      </div>
    </div>

);
}

function Satisfication() {
const { dashOffset } = useSpring({
dashOffset: 78.54,
from: { dashOffset: 785.4 },
config: config.molasses,
});
return (

<div className="p-4 h-full">
<div className="flex justify-between items-center">
<div className="text-white font-bold">Satisfication</div>
<Icon path="res-react-dash-options" className="w-2 h-2" />
</div>
<div className="mt-3">From all projects</div>
<div className="flex justify-center">
<svg
          viewBox="0 0 700 380"
          fill="none"
          width="300"
          xmlns="http://www.w3.org/2000/svg"
          id="svg"
        >
<path
            d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
            stroke="#2d2d2d"
            strokeWidth="40"
            strokeLinecap="round"
          />
<animated.path
d="M100 350C100 283.696 126.339 220.107 173.223 173.223C220.107 126.339 283.696 100 350 100C416.304 100 479.893 126.339 526.777 173.223C573.661 220.107 600 283.696 600 350"
stroke="#2f49d0"
strokeWidth="40"
strokeLinecap="round"
strokeDasharray="785.4"
strokeDashoffset={dashOffset}
id="svgPath"
className="svgPath"
/>

          <animated.circle
            cx={dashOffset.interpolate(
              (x) => 350 + 250 * Math.cos(map(x, 785.4, 0, pi, tau)),
            )}
            cy={dashOffset.interpolate(
              (x) => 350 + 250 * Math.sin(map(x, 785.4, 0, pi, tau)),
            )}
            r="12"
            fill="#fff"
          />
          <circle cx="140" cy="350" r="5" fill="#2f49d0" />
          <circle
            cx="144.5890038459008"
            cy="306.3385449282706"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="158.15545389505382"
            cy="264.58530495408195"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="180.10643118126103"
            cy="226.56509701858067"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="209.48257266463972"
            cy="193.93958664974724"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="244.9999999999999"
            cy="168.1346652052679"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="285.10643118126103"
            cy="150.27813157801776"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="328.0490227137926"
            cy="141.15040197266262"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="371.95097728620715"
            cy="141.1504019726626"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="414.8935688187389"
            cy="150.27813157801774"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="454.9999999999999"
            cy="168.1346652052678"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="490.51742733536014"
            cy="193.93958664974713"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="519.8935688187389"
            cy="226.5650970185806"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="541.8445461049462"
            cy="264.58530495408183"
            r="5"
            fill="#2f49d0"
          />
          <circle
            cx="555.4109961540992"
            cy="306.33854492827044"
            r="5"
            fill="#2f49d0"
          />
          <circle cx="560" cy="349.99999999999994" r="5" fill="#2f49d0" />
          <path
            d="M349.292 375C395.845 375 433.583 337.261 433.583 290.708C433.583 244.155 395.845 206.417 349.292 206.417C302.739 206.417 265 244.155 265 290.708C265 337.261 302.739 375 349.292 375Z"
            fill="white"
          />
          <path
            d="M349.292 358.708C386.847 358.708 417.292 328.264 417.292 290.708C417.292 253.153 386.847 222.708 349.292 222.708C311.736 222.708 281.292 253.153 281.292 290.708C281.292 328.264 311.736 358.708 349.292 358.708Z"
            fill="#D2D6E7"
          />
          <path
            d="M347.167 343.833C376.898 343.833 401 319.731 401 290C401 260.269 376.898 236.167 347.167 236.167C317.435 236.167 293.333 260.269 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833Z"
            fill="#FFE17D"
          />
          <path
            d="M347.167 316.482C339.696 316.482 332.608 313.623 328.204 308.835C327.391 307.953 327.449 306.58 328.331 305.768C329.213 304.956 330.588 305.013 331.399 305.896C334.996 309.807 340.89 312.141 347.167 312.141C353.443 312.141 359.338 309.807 362.935 305.896C363.745 305.013 365.121 304.956 366.003 305.768C366.885 306.58 366.942 307.953 366.13 308.835C361.725 313.623 354.637 316.482 347.167 316.482Z"
            fill="#AA7346"
          />
          <path
            d="M328.933 290C326.535 290 324.592 288.056 324.592 285.659V282.186C324.592 279.788 326.535 277.844 328.933 277.844C331.33 277.844 333.274 279.788 333.274 282.186V285.659C333.274 288.056 331.33 290 328.933 290Z"
            fill="#7D5046"
          />
          <path
            d="M328.933 277.844C328.635 277.844 328.345 277.875 328.064 277.932V283.922C328.064 285.361 329.231 286.527 330.669 286.527C332.108 286.527 333.274 285.361 333.274 283.922V282.186C333.274 279.788 331.331 277.844 328.933 277.844Z"
            fill="#9C6846"
          />
          <path
            d="M365.401 290C363.003 290 361.059 288.056 361.059 285.659V282.186C361.059 279.788 363.003 277.844 365.401 277.844C367.798 277.844 369.742 279.788 369.742 282.186V285.659C369.742 288.056 367.798 290 365.401 290Z"
            fill="#7D5046"
          />
          <path
            d="M365.401 277.844C365.103 277.844 364.813 277.875 364.532 277.932V283.922C364.532 285.361 365.699 286.527 367.137 286.527C368.576 286.527 369.742 285.361 369.742 283.922V282.186C369.742 279.788 367.798 277.844 365.401 277.844Z"
            fill="#9C6846"
          />
          <path
            d="M354.981 336.019C325.25 336.019 301.148 311.917 301.148 282.186C301.148 269.31 305.673 257.496 313.213 248.232C301.085 258.103 293.333 273.144 293.333 290C293.333 319.731 317.435 343.833 347.167 343.833C364.023 343.833 379.064 336.081 388.935 323.953C379.671 331.493 367.857 336.019 354.981 336.019Z"
            fill="#FFD164"
          />
        </svg>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-between mt-2" style={{ width: '300px' }}>
          <div className="" style={{ width: '50px', paddingLeft: '16px' }}>
            0%
          </div>
          <div
            className=""
            style={{
              width: '150px',
              textAlign: 'center',
            }}
          >
            <div
              className="font-bold"
              style={{ color: '#2f49d1', fontSize: '18px' }}
            >
              97.78%
            </div>
            <div className="">Based on Likes</div>
          </div>
          <div className="" style={{ width: '50px' }}>
            100%
          </div>
        </div>
      </div>
    </div>

);
}

function AddComponent() {
return (

<div>
<div className="w-full h-20 add-component-head" />
<div
className="flex flex-col items-center"
style={{
          transform: 'translate(0, -40px)',
        }} >
<div
className=""
style={{
            background: '#414455',
            width: '80px',
            height: '80px',
            borderRadius: '999px',
          }} >
<img
            src="https://assets.codepen.io/3685267/res-react-dash-rocket.svg"
            alt=""
            className="w-full h-full"
          />
</div>
<div className="text-white font-bold mt-3">
No Components Created Yet
</div>
<div className="mt-2">Simply create your first component</div>
<div className="mt-1">Just click on the button</div>
<div
className="flex items-center p-3 mt-3"
style={{
            background: '#2f49d1',
            borderRadius: '15px',
            padding: '8px 16px',
            justifyContent: 'center',
            color: 'white',
          }} >
<Icon path="res-react-dash-add-component" className="w-5 h-5" />
<div className="ml-2">Add Component</div>
<div
className="ml-2"
style={{
              background: '#4964ed',
              borderRadius: '15px',
              padding: '4px 8px 4px 8px',
            }} >
129
</div>
</div>
</div>
</div>
);
}

function SidebarIcons({ id }) {
const icons = {
0: (
<>
<path d="M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12V5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z" />
<path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        />
</>
),
1: (
<>
<path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 5C3 3.34315 4.34315 2 6 2H14C17.866 2 21 5.13401 21 9V19C21 20.6569 19.6569 22 18 22H6C4.34315 22 3 20.6569 3 19V5ZM13 4H6C5.44772 4 5 4.44772 5 5V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V9H13V4ZM18.584 7C17.9413 5.52906 16.6113 4.4271 15 4.10002V7H18.584Z"
        />
</>
),
2: (
<>
<path d="M2 4V18L6.8 14.4C7.14582 14.1396 7.56713 13.9992 8 14H16C17.1046 14 18 13.1046 18 12V4C18 2.89543 17.1046 2 16 2H4C2.89543 2 2 2.89543 2 4ZM4 14V4H16V12H7.334C6.90107 11.9988 6.47964 12.1393 6.134 12.4L4 14Z" />
<path d="M22 22V9C22 7.89543 21.1046 7 20 7V18L17.866 16.4C17.5204 16.1393 17.0989 15.9988 16.666 16H7C7 17.1046 7.89543 18 9 18H16C16.4329 17.9992 16.8542 18.1396 17.2 18.4L22 22Z" />
</>
),
3: (
<>
<path d="M9 3C6.23858 3 4 5.23858 4 8C4 10.7614 6.23858 13 9 13C11.7614 13 14 10.7614 14 8C14 5.23858 11.7614 3 9 3ZM6 8C6 6.34315 7.34315 5 9 5C10.6569 5 12 6.34315 12 8C12 9.65685 10.6569 11 9 11C7.34315 11 6 9.65685 6 8Z" />
<path d="M16.9084 8.21828C16.6271 8.07484 16.3158 8.00006 16 8.00006V6.00006C16.6316 6.00006 17.2542 6.14956 17.8169 6.43645C17.8789 6.46805 17.9399 6.50121 18 6.5359C18.4854 6.81614 18.9072 7.19569 19.2373 7.65055C19.6083 8.16172 19.8529 8.75347 19.9512 9.37737C20.0496 10.0013 19.9987 10.6396 19.8029 11.2401C19.6071 11.8405 19.2719 12.3861 18.8247 12.8321C18.3775 13.2782 17.8311 13.6119 17.2301 13.8062C16.6953 13.979 16.1308 14.037 15.5735 13.9772C15.5046 13.9698 15.4357 13.9606 15.367 13.9496C14.7438 13.8497 14.1531 13.6038 13.6431 13.2319L13.6421 13.2311L14.821 11.6156C15.0761 11.8017 15.3717 11.9248 15.6835 11.9747C15.9953 12.0247 16.3145 12.0001 16.615 11.903C16.9155 11.8059 17.1887 11.639 17.4123 11.416C17.6359 11.193 17.8035 10.9202 17.9014 10.62C17.9993 10.3198 18.0247 10.0006 17.9756 9.68869C17.9264 9.37675 17.8041 9.08089 17.6186 8.82531C17.4331 8.56974 17.1898 8.36172 16.9084 8.21828Z" />
<path d="M19.9981 21C19.9981 20.475 19.8947 19.9551 19.6938 19.47C19.4928 18.9849 19.1983 18.5442 18.8271 18.1729C18.4558 17.8017 18.0151 17.5072 17.53 17.3062C17.0449 17.1053 16.525 17.0019 16 17.0019V15C16.6821 15 17.3584 15.1163 18 15.3431C18.0996 15.3783 18.1983 15.4162 18.2961 15.4567C19.0241 15.7583 19.6855 16.2002 20.2426 16.7574C20.7998 17.3145 21.2417 17.9759 21.5433 18.7039C21.5838 18.8017 21.6217 18.9004 21.6569 19C21.8837 19.6416 22 20.3179 22 21H19.9981Z" />
<path d="M16 21H14C14 18.2386 11.7614 16 9 16C6.23858 16 4 18.2386 4 21H2C2 17.134 5.13401 14 9 14C12.866 14 16 17.134 16 21Z" />
</>
),
4: (
<>
<path d="M19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4H7V2H9V4H15V2H17V4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22ZM5 10V20H19V10H5ZM5 6V8H19V6H5ZM17 14H7V12H17V14Z" />
</>
),
5: (
<>
<path d="M21.266 20.998H2.73301C2.37575 20.998 2.04563 20.8074 1.867 20.498C1.68837 20.1886 1.68838 19.8074 1.86701 19.498L11.133 3.49799C11.3118 3.1891 11.6416 2.9989 11.9985 2.9989C12.3554 2.9989 12.6852 3.1891 12.864 3.49799L22.13 19.498C22.3085 19.8072 22.3086 20.1882 22.1303 20.4975C21.9519 20.8069 21.6221 20.9976 21.265 20.998H21.266ZM12 5.99799L4.46901 18.998H19.533L12 5.99799ZM12.995 14.999H10.995V9.99799H12.995V14.999Z" />
<path d="M11 16H13V18H11V16Z" />
</>
),
6: (
<>
<path d="M13.82 22H10.18C9.71016 22 9.3036 21.673 9.20304 21.214L8.79604 19.33C8.25309 19.0921 7.73827 18.7946 7.26104 18.443L5.42404 19.028C4.97604 19.1709 4.48903 18.9823 4.25404 18.575L2.43004 15.424C2.19763 15.0165 2.2777 14.5025 2.62304 14.185L4.04804 12.885C3.98324 12.2961 3.98324 11.7019 4.04804 11.113L2.62304 9.816C2.27719 9.49837 2.19709 8.98372 2.43004 8.576L4.25004 5.423C4.48503 5.0157 4.97204 4.82714 5.42004 4.97L7.25704 5.555C7.5011 5.37416 7.75517 5.20722 8.01804 5.055C8.27038 4.91269 8.53008 4.78385 8.79604 4.669L9.20404 2.787C9.30411 2.32797 9.71023 2.00049 10.18 2H13.82C14.2899 2.00049 14.696 2.32797 14.796 2.787L15.208 4.67C15.4888 4.79352 15.7623 4.93308 16.027 5.088C16.274 5.23081 16.5127 5.38739 16.742 5.557L18.58 4.972C19.0277 4.82967 19.5142 5.01816 19.749 5.425L21.569 8.578C21.8015 8.98548 21.7214 9.49951 21.376 9.817L19.951 11.117C20.0158 11.7059 20.0158 12.3001 19.951 12.889L21.376 14.189C21.7214 14.5065 21.8015 15.0205 21.569 15.428L19.749 18.581C19.5142 18.9878 19.0277 19.1763 18.58 19.034L16.742 18.449C16.5095 18.6203 16.2678 18.7789 16.018 18.924C15.7559 19.0759 15.4854 19.2131 15.208 19.335L14.796 21.214C14.6956 21.6726 14.2895 21.9996 13.82 22ZM7.62004 16.229L8.44004 16.829C8.62489 16.9652 8.81755 17.0904 9.01704 17.204C9.20474 17.3127 9.39801 17.4115 9.59604 17.5L10.529 17.909L10.986 20H13.016L13.473 17.908L14.406 17.499C14.8133 17.3194 15.1999 17.0961 15.559 16.833L16.38 16.233L18.421 16.883L19.436 15.125L17.853 13.682L17.965 12.67C18.0142 12.2274 18.0142 11.7806 17.965 11.338L17.853 10.326L19.437 8.88L18.421 7.121L16.38 7.771L15.559 7.171C15.1998 6.90671 14.8133 6.68175 14.406 6.5L13.473 6.091L13.016 4H10.986L10.527 6.092L9.59604 6.5C9.39785 6.58704 9.20456 6.68486 9.01704 6.793C8.81878 6.90633 8.62713 7.03086 8.44304 7.166L7.62204 7.766L5.58204 7.116L4.56504 8.88L6.14804 10.321L6.03604 11.334C5.98684 11.7766 5.98684 12.2234 6.03604 12.666L6.14804 13.678L4.56504 15.121L5.58004 16.879L7.62004 16.229ZM11.996 16C9.7869 16 7.99604 14.2091 7.99604 12C7.99604 9.79086 9.7869 8 11.996 8C14.2052 8 15.996 9.79086 15.996 12C15.9933 14.208 14.204 15.9972 11.996 16ZM11.996 10C10.9034 10.0011 10.0139 10.8788 9.99827 11.9713C9.98262 13.0638 10.8466 13.9667 11.9387 13.9991C13.0309 14.0315 13.9469 13.1815 13.996 12.09V12.49V12C13.996 10.8954 13.1006 10 11.996 10Z" />
</>
),
};
return (
<svg
      className="w-8 h-8 xl:w-5 xl:h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
{icons[id]}
</svg>
);
}

function Icon({ path = 'options', className = 'w-4 h-4' }) {
return (
<img
src={`https://assets.codepen.io/3685267/${path}.svg`}
alt=""
className={clsx(className)}
/>
);
}

function IconButton({
onClick = () => {},
icon = 'options',
className = 'w-4 h-4',
}) {
return (
<button onClick={onClick} type="button" className={className}>
<img
src={`https://assets.codepen.io/3685267/${icon}.svg`}
alt=""
className="w-full h-full"
/>
</button>
);
}

function Image({ path = '1', className = 'w-4 h-4' }) {
return (
<img
src={`https://assets.codepen.io/3685267/${path}.jpg`}
alt=""
className={clsx(className, 'rounded-full')}
/>
);
}

ReactDOM.render(<App />,
document.getElementById("root"))

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');

body{
font-family: 'Nunito', sans-serif;
color:#676767;
background-color: #1e1e1e;
}

.bg-card{
background-color:#171717;
}
.bg-sidebar-card-top{
background-color: #353535;
}
.sidebar-separator-top{
border-bottom: 1px solid #2e2e2e;
}
.sidebar-separator-bottom{
border-top: 1px solid #2e2e2e;
}
.text-premium-yellow{
color: #f7b91c;
}
.icon-background{
background: #2d2d2d;
}

.tooltip-head{
background: #1d1d1d;
}
.tooltip-body{
background:#252525 ;
}

.search-icon{
top: 50%;
transform: translate(0, -50%);
}

.card-stack-border{
border-bottom: 2px solid #696969;
}
.bg-details{
background-color: #1e1e1e;
}

.add-component-head{
background-color: #181818;
background-image: url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
}

.sidebar-item-selected{
color: white;
border-right: 2px solid white;
}
.sidebar-item{
border-right: 2px solid transparent;
}
.sidebar-item:hover {
color:#a1a0a0;
}

<div class="relative bg-gray-100 min-h-screen flex" id="app">
  <nav class="w-16 bg-white shadow-lg flex flex-col items-center">
    <a class="text-3xl font-black mt-2 mb-8">K</a>
    <img  src="https://image.flaticon.com/icons/svg/61/61689.svg" class="h-8 w-8 mb-10 cursor-pointer hover:opacity-100"/>
    
    <img src="https://image.flaticon.com/icons/svg/179/179679.svg" class="h-8 w-8 opacity-25 hover:opacity-100 mb-10 cursor-pointer"/>
    
    <img src="https://image.flaticon.com/icons/svg/1077/1077076.svg" class="h-8 w-8 opacity-25  cursor-pointer mb-10"/>
    
     <img src="https://image.flaticon.com/icons/svg/61/61122.svg" class="h-8 w-8 opacity-25  cursor-pointer"/>
  </nav>
  <div class="w-full">
    <div class="h-24 bg-header flex justify-between items-start px-16 pt-4">
      <h2 class="text-4xl text-white font-bold">{{ title }}</h2>
      <div class="flex items-center">
        <img class="h-12 w-12 mr-4 rounded-full border-2 border-blue-500" :src="profilePic"
/>
        <h4 class="text-white font-thin">John Doe</h4>
      </div>
    </div>
    <div class="px-16 bg-header flex items-center">
      <div class="filter-menu h-12 px-4 py-3 rounded-full bg-gray-200 w-1/2 flex justify-between items-center">
        <span class="text-white text-xs">Show Only: </span>
        <div class="options flex items-center py-2">
          <button class="text-xs font-thin p-1 border-2 text-white rounded-full w-24 hover:bg-white hover:text-black mr-4">All</button>
           <button class="text-xs flex items-center justify-between opacity-50 font-thin py-1 border-2 text-white rounded-full w-26 hover:bg-white hover:text-black mr-4 px-2">
             Confirmed
             <img class="pl-1 h-4 w-4" src="https://image.flaticon.com/icons/svg/443/443138.svg"/>
          </button>
           <button class="text-xs flex items-center justify-between opacity-50 font-thin py-1 border-2 text-white rounded-full w-26 hover:bg-white hover:text-black mr-4 px-4">
             Pending
             <img class="pl-1 h-4 w-4" src="https://image.flaticon.com/icons/svg/189/189106.svg"/>
          </button>
            <button class="text-xs flex items-center justify-between opacity-50 font-thin py-1 border-2 text-white rounded-full w-26 hover:bg-white hover:text-black px-2">
             Cancelled
             <img class="pl-1 h-3 w-3" src="https://image.flaticon.com/icons/svg/579/579006.svg"/>
          </button>
        </div>
      </div>
      <div class="ml-4 filter-menu h-12 p-btn rounded-full bg-gray-200 w-48 flex justify-between items-stretch">
        <div class="bg-green-500 hover:bg-green-400 cursor-pointer flex justify-center items-center rounded-full w-48 text-white">
        <img class="invert h-4 w-4 mr-3" src="https://image.flaticon.com/icons/svg/227/227121.svg" alt="" /> <span class="font-hairline">Add Klatsch</span>
        </div>
      </div>
    </div>
    <div class="bg-header flex  px-16 pt-4 items-baseline">
    <h4 class="text-xl font-bold text-white w-1/2">Today</h4>  
      <p class="w-48 italic text-sm opacity-75 text-white font-hairline text-right">Meeting in 19 minutes</p>
    </div>
  <header class="h-16  bg-header w-full  rounded-bl-full">
</header>
    <app-klatsch v-bind:klatsch="today"></app-klatsch>  
    <div class="px-16 pt-8 content">
      <div class="h-2 border-gray-200 border-t-2 w-2/3"></div>
    <h4 class="text-xl font-bold text-gray-800 w-1/2 pt-4 mb-4">Upcoming</h4> 
  </div>
      <div class="klatsch-grid">
    <app-klatsch v-for="kl in upcoming" v-bind:klatsch="kl"></app-klatsch>
    </div>
  </div>
  <div class="sidebar absolute right-0 bottom-0 top-0 w-1/4 bg-white mt-20 shadow-lg">
   <div class="relative text-center flex justify-center items-center border-b py-4 border-gray-200">
   <span> < </span>  <span class="ml-4 mr-2 font-extrabold text-xl text-gray-900">September</span> <span class="mr-4 text-xl text-gray-600">2019</span> <span> > </span> <span class="absolute text-xl right-0 top-0 px-6 pt-1"> + </span>
    </div>
     <div class="flex justify-center items-center py-6 border-b border-gray-200">
       <div class="flex flex-col justify-center items-center">
         <div class="h-8 w-8 rounded-full flex justify-center items-center text-white" :class="getBgColor('Confirmed')">
           ✔
         </div>
          <div>
         <span class=" font-extrabold">5</span><span class="text-sm text-gray-600"> Confirmed</span>
       </div>
       </div>
       <div class="mx-4 flex flex-col justify-center items-center">
         <div class="h-8 w-8 rounded-full flex justify-center items-center text-white" :class="getBgColor('Pending')">
           🕘
         </div>
          <div>
         <span class=" font-extrabold">3</span><span class="text-sm text-gray-600"> Pending</span>
       </div>
       </div>
       <div class="flex flex-col justify-center items-center">
         <div class="h-8 w-8 rounded-full flex justify-center items-center text-white" :class="getBgColor('Cancelled')">
           ✖
         </div>
          <div>
         <span class=" font-extrabold">1</span><span class="text-sm text-gray-600"> Cancelled</span>
       </div>
       </div>
     </div>
     <div class="flex flex-col items-center mx-4 py-3 border-b border-gray-200">
        <span class="font-extrabold text-gray-900 text-xl">Klatsch Details</span>
       <div class="flex items-center justify-center my-4">
         <div class="h-2 w-2 mr-1 rounded-full" :class="getBgColor('Confirmed')"></div>
          <span class="text-sm font-bold" :class="getTextColor('Confirmed')">Confirmed</span>
       </div>
       <div class="flex justify-center items-center">
         <img :src="profilePic" class="h-16 w-16 rounded-full" alt="">
         <img src="https://image.flaticon.com/icons/svg/251/251078.svg" class="h-10 w-10 mx-6 opacity-75">
         <img :src="today.avatar" class="h-16 w-16 rounded-full" alt="">
       </div>
       <div class="mt-4 flex flex-col">
         <span class="font-extrabold text-lg text-gray-900">{{today.client}}</span>
         <span class="text-base text-gray-600 mt-1">{{today.phone}}</span>
       </div>
     </div>
      <div class="mx-4 py-3 border-b border-gray-200">
         <div class="px-8">
           <div class="flex justify-between items-start mb-4">
             <div class="flex flex-col">
                  <span class="font-extrabold text-xl text-gray-900">Date & Time</span>
                  <p class="text-sm text-gray-600 flex items-center">
                    3.30PM - 4.00PM
                  </p>
           </div>
             <img src="https://image.flaticon.com/icons/svg/1159/1159876.svg" alt="" class="cursor-pointer h-4 w-4 opacity-25 mt-2">
        </div>
           <div class="flex justify-between items-start mb-4">
             <div class="flex flex-col">
                  <span class="font-extrabold text-xl text-gray-900">Location</span>
                <p class="text-sm font-bold text-gray-600 flex items-center">
                    Interpid Cafe
                  </p>
                  <p class="text-sm text-gray-600 flex items-center">
                    150 First St, Cambridge, MA 02141
                  </p>
           </div>
             <img src="https://image.flaticon.com/icons/svg/1159/1159876.svg" alt="" class="cursor-pointer h-4 w-4 opacity-25 mt-2">
        </div>
           <div class="flex justify-between items-start">
             <div class="flex flex-col">
                  <span class="font-extrabold text-xl text-gray-900">Topics</span>
                  <p class="text-sm text-gray-600 flex items-center">
                    Movies, Health, Food
                  </p>
           </div>
             <img src="https://image.flaticon.com/icons/svg/1159/1159876.svg" alt="" class="cursor-pointer h-4 w-4 opacity-25 mt-2">
        </div>
       </div>
  </div>
     <div class="mx-4 py-3">
       <div class="px-8">
         <div class="flex justify-between items-center mb-4">
            <span class="font-extrabold text-xl text-gray-900">Status</span>
             <p class="text-sm text-gray-600 flex items-end underline cursor-pointer">
                    Cancel Klatsch
                  </p>
        </div>
       </div>
     </div>
</div>
<script type="text/x-template" id="tmpl-klatsch-card">
</script>

@import url("https://fonts.googleapis.com/css?family=Poppins:400,700&display=swap");

body \* {
font-family: "Poppins", sans-serif;
}

.bg-header {
background: #000034 !important;
}

.rounded-custom {
border-radius: 20px;
}

.sidebar {
border-top-left-radius: 40px;
}

.filter-menu {
background: rgba(255, 255, 255, 0.1) !important;
}

.invert {
filter: invert(1);
}

.p-btn {
padding: 5px;
}

.today-card {
transform: translateY(-3rem);
width: 61%;
}

.content {
transform: translateY(-3rem);
}

.klatsch-grid {
display: grid;
grid-template-columns: 1fr;
grid-row-gap: 2rem;
}

CodePen Home
Tailwind Responsive Timeline Example

<!-- Modified Version of - https://tailwindcomponents.com/component/vertical-timeline -->

<body class="bg-gray-50">
  <div class="p-4 mt-4">
    <h1 class="text-4xl text-center font-semibold mb-6">Package status</h1>
    <div class="container">
      <div class="flex flex-col md:grid grid-cols-12 text-gray-50">

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">Package Booked</h3>
            <p class="leading-tight text-justify w-full">
              21 July 2021, 04:30 PM
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-green-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
              <i class="fas fa-check-circle text-white"></i>
            </div>
          </div>
          <div class="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1">Out for Delivery</h3>
            <p class="leading-tight text-justify">
              22 July 2021, 01:00 PM
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-red-500 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
              <i class="fas fa-times-circle text-white"></i>
            </div>
          </div>
          <div class="bg-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1 text-gray-50">Cancelled</h3>
            <p class="leading-tight text-justify">
              Customer cancelled the order
            </p>
          </div>
        </div>

        <div class="flex md:contents">
          <div class="col-start-2 col-end-4 mr-10 md:mx-auto relative">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-gray-300 pointer-events-none"></div>
            </div>
            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
              <i class="fas fa-exclamation-circle text-gray-400"></i>
            </div>
          </div>
          <div class="bg-gray-300 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
            <h3 class="font-semibold text-lg mb-1 text-gray-400">Delivered</h3>
            <p class="leading-tight text-justify">

            </p>
          </div>
        </div>

      </div>
    </div>

  </div>
</body>

CodePen Home
Blog UI with Tailwind CSS

<div class="fixed right-0 bottom-0 m-6 p-2 bg-white inline-flex items-center rounded-full z-10">
  <button class="bg-gray-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="gray"></button>
  <button class="bg-red-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="red"></button>
  <button class="bg-orange-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="orange"></button>
  <button class="bg-yellow-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="yellow"></button>
  <button class="bg-green-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="green"></button>
  <button class="bg-teal-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="teal"></button>
  <button class="bg-blue-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="blue"></button>
  <button class="bg-indigo-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="indigo"></button>
  <button class="bg-purple-700 w-4 h-4 rounded-full mr-2 outline-none focus:outline-none" theme-button="purple"></button>
  <button class="bg-pink-700 w-4 h-4 rounded-full outline-none focus:outline-none" theme-button="pink"></button>
</div>
<div class="flex flex-col min-h-screen">
  <div class="bg-gray-800">
    <div class="p-5 border-b border-gray-700 flex items-center justify-between">
      <button class="border border-gray-600 text-gray-600 px-4 py-2 rounded-full inline-flex items-center hover:bg-gray-600 hover:text-white">
      <svg class="w-4 h-4 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path d="M30.276 1.722C29.168.611 27.69 0 26.121 0s-3.045.61-4.154 1.72L4.294 19.291c-.105.104-.185.229-.235.367l-4 11c-.129.355-.046.756.215 1.031.192.202.455.311.726.311.098 0 .196-.014.293-.044l9.949-3.052c.156-.047.298-.133.414-.248l18.621-18.621C31.389 8.926 32 7.448 32 5.878c-.001-1.569-.611-3.046-1.724-4.156zM10.092 27.165l-3.724 1.144c-.217-.637-.555-1.201-1.016-1.662-.401-.399-.866-.709-1.356-.961L5.7 21H8v2c0 .553.447 1 1 1h1.765l-.673 3.165zm14.72-14.494L12.628 24.855l.35-1.647c.062-.296-.012-.603-.202-.837-.19-.235-.475-.371-.776-.371h-2v-2c0-.552-.448-1-1-1H7.422L19.315 7.175l.012.011c.732-.733 1.707-1.136 2.742-1.136s2.011.403 2.742 1.136 1.138 1.707 1.138 2.743c0 1.036-.403 2.009-1.137 2.742zm4.05-4.05l-.932.933c-.09-1.429-.683-2.761-1.703-3.782-1.021-1.022-2.354-1.614-3.787-1.703l.938-.931.002-.002C24.11 2.403 25.085 2 26.121 2s2.01.403 2.741 1.136C29.596 3.869 30 4.843 30 5.878c0 1.037-.402 2.011-1.138 2.743zm-6.569-.328l-10 10c-.391.391-.391 1.023 0 1.414.194.195.451.293.707.293s.511-.098.707-.293l10-10c.391-.391.391-1.023 0-1.414-.392-.391-1.023-.391-1.414 0z"/>
      </svg>
      Write Article
    </button>
      <svg class="w-10 h-10" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="16" stroke="#FFF" stroke-width="8" fill="none" fill-rule="evenodd"/>
    </svg>
      <div class="inline-flex items-center text-gray-600">
        <svg class="w-5 h-5 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.313 250.313">
        <path d="M244.186 214.604l-54.379-54.378c-.289-.289-.628-.491-.93-.76 10.7-16.231 16.945-35.66 16.945-56.554C205.822 46.075 159.747 0 102.911 0S0 46.075 0 102.911c0 56.835 46.074 102.911 102.91 102.911 20.895 0 40.323-6.245 56.554-16.945.269.301.47.64.759.929l54.38 54.38c8.169 8.168 21.413 8.168 29.583 0 8.168-8.169 8.168-21.413 0-29.582zm-141.275-44.458c-37.134 0-67.236-30.102-67.236-67.235 0-37.134 30.103-67.236 67.236-67.236 37.132 0 67.235 30.103 67.235 67.236s-30.103 67.235-67.235 67.235z" fill-rule="evenodd" clip-rule="evenodd"/>
      </svg>
        <svg class="w-5 h-5 fill-current mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510">
        <path d="M255 510c28.05 0 51-22.95 51-51H204c0 28.05 22.95 51 51 51zm165.75-153V216.75c0-79.05-53.55-142.8-127.5-160.65V38.25C293.25 17.85 275.4 0 255 0s-38.25 17.85-38.25 38.25V56.1c-73.95 17.85-127.5 81.6-127.5 160.65V357l-51 51v25.5h433.5V408l-51-51z"/>
      </svg>
        <a class="cursor-pointer w-8 h-8 rounded-full overflow-hidden">
       <img src="https://randomuser.me/api/portraits/men/28.jpg" />
      </a>
      </div>
    </div>
    <div class="container mx-auto">
      <div class="flex flex-wrap py-8 flex-col sm:flex-row">
        <div class="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 m-auto sm:m-0">
          <img src="https://randomuser.me/api/portraits/women/14.jpg" />
        </div>
        <div class="sm:pl-10 sm:pt-4 flex-1">
          <div class="flex sm:justify-between sm:flex-row sm:flex-no-wrap justify-center flex-wrap mb-6">
            <div class="flex flex-wrap md:w-auto w-full md:mb-0 mb-4">
              <h2 class="text-white text-2xl w-full mb-3 text-center sm:text-left mt-4 sm:mt-0">Phoebe Caulfield</h2>
              <div class="flex sm:w-auto w-full sm:justify-start justify-center">
                <span class="text-gray-600 mr-4 tracking-wider"><span class="text-gray-400">120</span> Followers</span>
                <span class="text-gray-600 mr-4 tracking-wider"><span class="text-gray-400">45</span> Following</span>
              </div>
              <div class="flex sm:w-auto sm:mt-0 mt-4 sm:mb-0 mb-2 w-full sm:justify-start justify-center">
              <a href="#" class="text-gray-600 mr-3 hover:text-white">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96.124 96.123">
              <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037c-1.083 0-1.96.878-1.96 1.961v15.803c0 1.083.878 1.96 1.96 1.96H36.57v39.876c0 1.083.877 1.96 1.96 1.96h16.352c1.083 0 1.96-.878 1.96-1.96V54.287h14.654c1.083 0 1.96-.877 1.96-1.96l.006-15.803c0-.52-.207-1.018-.574-1.386-.367-.368-.867-.575-1.387-.575H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003c1.082 0 1.959-.878 1.959-1.96V1.98c0-1.081-.876-1.958-1.957-1.96z"/>
            </svg>
          </a>
              <a href="#" class="text-gray-600 mr-3 hover:text-white">
            <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
              <path d="M612 116.258c-22.525 9.981-46.694 16.75-72.088 19.772 25.929-15.527 45.777-40.155 55.184-69.411-24.322 14.379-51.169 24.82-79.775 30.48-22.907-24.437-55.49-39.658-91.63-39.658-69.334 0-125.551 56.217-125.551 125.513 0 9.828 1.109 19.427 3.251 28.606-104.326-5.24-196.835-55.223-258.75-131.174-10.823 18.51-16.98 40.078-16.98 63.101 0 43.559 22.181 81.993 55.835 104.479-20.575-.688-39.926-6.348-56.867-15.756v1.568c0 60.806 43.291 111.554 100.693 123.104-10.517 2.83-21.607 4.398-33.08 4.398-8.107 0-15.947-.803-23.634-2.333 15.985 49.907 62.336 86.199 117.253 87.194-42.947 33.654-97.099 53.655-155.916 53.655-10.134 0-20.116-.612-29.944-1.721 55.567 35.681 121.536 56.485 192.438 56.485 230.948 0 357.188-191.291 357.188-357.188l-.421-16.253c24.666-17.593 46.005-39.697 62.794-64.861z"/>
            </svg>
          </a>
              <a href="#" class="text-gray-600 hover:text-white">
              <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 169.063 169.063">
                <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z"/>
                <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z"/>
              </svg>
            </a>
             </div>
            </div>
            <button class="border border-gray-700 md:ml-auto mr-4 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white flex-shrink-0">
            <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M497 80.333h-65.334V15c0-8.284-6.716-15-15-15s-15 6.716-15 15v65.333h-65.332c-8.284 0-15 6.716-15 15s6.716 15 15 15h65.332v65.334c0 8.284 6.716 15 15 15s15-6.716 15-15v-65.334H497c8.284 0 15-6.716 15-15s-6.716-15-15-15zM175.666 321.334C78.804 321.334 0 400.138 0 497c0 8.284 6.716 15 15 15h321.334c8.284 0 15-6.716 15-15 0-96.862-78.805-175.666-175.668-175.666zM175.666 64.267c-52.566 0-95.332 42.767-95.332 95.334s42.766 95.333 95.332 95.333c52.567 0 95.334-42.766 95.334-95.333s-42.767-95.334-95.334-95.334z"/>
            </svg>
          </button>
            <button class="border border-gray-700 rounded-full w-12 h-12 inline-flex items-center justify-center text-gray-600 hover:bg-gray-700 hover:text-white flex-shrink-0">
            <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.626 511.626">
              <path d="M49.106 178.729c6.472 4.567 25.981 18.131 58.528 40.685 32.548 22.554 57.482 39.92 74.803 52.099 1.903 1.335 5.946 4.237 12.131 8.71 6.186 4.476 11.326 8.093 15.416 10.852 4.093 2.758 9.041 5.852 14.849 9.277 5.806 3.422 11.279 5.996 16.418 7.7 5.14 1.718 9.898 2.569 14.275 2.569h.575c4.377 0 9.137-.852 14.277-2.569 5.137-1.704 10.615-4.281 16.416-7.7 5.804-3.429 10.752-6.52 14.845-9.277 4.093-2.759 9.229-6.376 15.417-10.852 6.184-4.477 10.232-7.375 12.135-8.71 17.508-12.179 62.051-43.11 133.615-92.79 13.894-9.703 25.502-21.411 34.827-35.116 9.332-13.699 13.993-28.07 13.993-43.105 0-12.564-4.523-23.319-13.565-32.264-9.041-8.947-19.749-13.418-32.117-13.418H45.679c-14.655 0-25.933 4.948-33.832 14.844C3.949 79.562 0 91.934 0 106.779c0 11.991 5.236 24.985 15.703 38.974 10.466 13.99 21.604 24.983 33.403 32.976z"/>
              <path d="M483.072 209.275c-62.424 42.251-109.824 75.087-142.177 98.501-10.849 7.991-19.65 14.229-26.409 18.699-6.759 4.473-15.748 9.041-26.98 13.702-11.228 4.668-21.692 6.995-31.401 6.995h-.578c-9.707 0-20.177-2.327-31.405-6.995-11.228-4.661-20.223-9.229-26.98-13.702-6.755-4.47-15.559-10.708-26.407-18.699-25.697-18.842-72.995-51.68-141.896-98.501C17.987 202.047 8.375 193.762 0 184.437v226.685c0 12.57 4.471 23.319 13.418 32.265 8.945 8.949 19.701 13.422 32.264 13.422h420.266c12.56 0 23.315-4.473 32.261-13.422 8.949-8.949 13.418-19.694 13.418-32.265V184.437c-8.186 9.132-17.7 17.417-28.555 24.838z"/>
            </svg>
          </button>
          </div>
          <p class="text-gray-500 leading-normal px-4 sm:px-0">
            Businesses often become known today through effective marketing. The marketing may be in the form of a regular news item or half column society news in the Sunday newspaper. The marketing may be in the form of a heart to heart.
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center border-t border-gray-700 py-5">
      <a href="#" class="text-white mx-5">Articles</a>
      <a href="#" class="text-gray-600 mx-5 hover:text-gray-500">Recommends</a>
      <a href="#" class="text-gray-600 mx-5 hover:text-gray-500">Subscriptions</a>
    </div>
  </div>
  <div class="bg-gray-900 pt-12 pb-6 flex-1">
    <div class="container mx-auto">
      <div class="flex flex-wrap md:-mx-3">
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden" style="background-image:url(https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80)">
            <h2 class="text-white text-lg mb-2">Is The Herbal Way The Right Way</h2>
            <p class="text-white opacity-50">Adwords Keyword Research For Beginners</p>
            <div class="flex flex-wrap justify-between items-center mt-auto pt-6">
              <div class="inline-flex items-center">
                <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                </div>
                <div class="flex-1 pl-2">
                  <h2 class="text-white mb-1">Ollie McBride</h2>
                  <p class="text-white opacity-50 text-xs">May 18</p>
                </div>
              </div>
              <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Luke Nunez</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Jonathan Mithu</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Mike Olle</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden" style="background-image:url(https://images.unsplash.com/photo-1539623704225-548826dc5a08?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)">
            <h2 class="text-white text-lg mb-2">Is The Herbal Way The Right Way</h2>
            <p class="text-white opacity-50">Adwords Keyword Research For Beginners</p>
            <div class="flex flex-wrap justify-between items-center mt-auto pt-6">
              <div class="inline-flex items-center">
                <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                </div>
                <div class="flex-1 pl-2">
                  <h2 class="text-white mb-1">Jack Roath</h2>
                  <p class="text-white opacity-50 text-xs">May 18</p>
                </div>
              </div>
              <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/23.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1565388161858-5ae922cbfde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/25.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2195&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/29.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">Show More</button>
      </div>
    </div>
  </div>
</div>

Loading tailwind

<div wire:loading class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
	<div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
	<h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
	<p class="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
</div>

<button>hey</button>

.loader {
border-top-color: #3498db;
-webkit-animation: spinner 1.5s linear infinite;
animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
0% {
-webkit-transform: rotate(0deg);
}
100% {
-webkit-transform: rotate(360deg);
}
}

@keyframes spinner {
0% {
transform: rotate(0deg);
}
100% {
transform: rotate(360deg);
}
}
