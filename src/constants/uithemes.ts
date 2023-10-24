import UITheme from "@/classes/UITheme";

const solidGreen = new UITheme();
solidGreen.name = 'Solid Green';
solidGreen._id = "SolidGreen";
solidGreen.themeRoot = 'rgba(0, 59, 15, 0.5)';
solidGreen.themeItalic = 'rgb(197, 196, 196)';
solidGreen.themeText = 'rgba(255, 253, 253, 1)';
solidGreen.themeBox = '#156800';
solidGreen.themeAccent = 'rgba(12, 151, 31, 1)';
solidGreen.themeBorder = 'rgba(0, 0, 0, 1)';
solidGreen.themeHoverPos = 'var(--theme-accent)';
solidGreen.themeHoverNeg = 'rgba(196, 0, 0, 1)';
solidGreen.themeBlur = '15px';
solidGreen.themeBorderWidth = '0px';
solidGreen.themeBorderRadius = '8px';
solidGreen.themeFont = "'DejaVuSansBold', sans-serif";
solidGreen.themeBorderType = 'solid';
solidGreen.themeTextHover = 'rgb(255, 255, 255)';
solidGreen.themeBackground = "url('./backgrounds/greendefault.svg')";
solidGreen.themeButton = 'rgba(14, 34, 19, 1)';
solidGreen.ThemeBrightColor = 'rgba(0, 255, 26, 1)'
solidGreen.themeFlavorText = 'rgba(0, 255, 13, 1)';

const solidBlue = new UITheme();
solidBlue.name = 'Solid Blue';
solidBlue._id = 'SolidBlue';
solidBlue.themeRoot = 'rgba(0, 19, 59, 0.5)';
solidBlue.themeItalic = 'rgb(197, 196, 196)';
solidBlue.themeText = 'rgba(255, 253, 253, 1)';
solidBlue.themeBox = 'rgba(8, 57, 131, 0.767)';
solidBlue.themeAccent = 'rgba(12, 78, 150, 1)';
solidBlue.themeBorder = 'rgba(0, 0, 0, 1)';
solidBlue.themeHoverPos = 'var(--theme-accent)';
solidBlue.themeHoverNeg = 'rgba(196, 0, 0, 1)';
solidBlue.themeBlur = '15px';
solidBlue.themeBorderWidth = '0px';
solidBlue.themeBorderRadius = '8px';
solidBlue.themeFont = "'DejaVuSansBold', sans-serif";
solidBlue.themeBorderType = 'solid';
solidBlue.themeTextHover = 'rgb(255, 255, 255)';
solidBlue.themeBackground = "url('./backgrounds/bluedefault.svg";
solidBlue.themeButton = 'rgba(14, 18, 33, 1)';
solidBlue.ThemeBrightColor = 'rgba(0, 30, 52)';
solidBlue.themeFlavorText = 'rgba(0, 162, 255, 1)';

const solidRed = new UITheme();
solidRed.name = 'Solid Red';
solidRed._id = 'SolidRed';
solidRed.themeRoot = 'rgba(59, 0, 0, 0.5)';
solidRed.themeItalic = 'rgb(197, 196, 196)';
solidRed.themeText = 'rgba(255, 253, 253, 1)';
solidRed.themeBox = 'rgba(131, 8, 21, 1)';
solidRed.themeAccent = 'rgba(150, 12, 30, 1)';
solidRed.themeBorder = 'rgba(0, 0, 0, 1)';
solidRed.themeHoverPos = 'var(--theme-accent)';
solidRed.themeHoverNeg = 'rgba(196, 0, 0, .75)';
solidRed.themeBlur = '15px';
solidRed.themeBorderWidth = '0px';
solidRed.themeBorderRadius = '8px';
solidRed.themeFont = "'DejaVuSansBold', sans-serif";
solidRed.themeBorderType = 'solid';
solidRed.themeTextHover = 'rgb(255, 255, 255)';
solidRed.themeBackground = "url('./backgrounds/reddefault.svg')"; // Changed the background to a hypothetical 'reddefault.svg'
solidRed.themeButton = 'rgba(33, 18, 14, 1)';
solidRed.ThemeBrightColor = 'rgba(52, 0, 10)';
solidRed.themeFlavorText = 'rgba(255, 0, 30, 1)';

const solidPurple = new UITheme();
solidPurple.name = 'Solid Purple';
solidPurple._id = 'SolidPurple';
solidPurple.themeRoot = 'rgba(50, 0, 50, 0.5)';
solidPurple.themeItalic = 'rgb(197, 176, 196)';
solidPurple.themeText = 'rgba(255, 253, 253, 1)';
solidPurple.themeBox = 'rgba(79, 16, 124, 1)';
solidPurple.themeAccent = 'rgba(69, 12, 95, 1)';
solidPurple.themeBorder = 'rgba(0, 0, 0, 1)';
solidPurple.themeHoverPos = 'var(--theme-accent)';
solidPurple.themeHoverNeg = 'rgba(196, 0, 70, 1)';
solidPurple.themeBlur = '15px';
solidPurple.themeBorderWidth = '0px';
solidPurple.themeBorderRadius = '8px';
solidPurple.themeFont = "'DejaVuSansBold', sans-serif";
solidPurple.themeBorderType = 'solid';
solidPurple.themeTextHover = 'rgb(255, 230, 255)';
solidPurple.themeBackground = "url('./backgrounds/purpledefault.svg')";
solidPurple.themeButton = 'rgba(100, 0, 143, 1)';
solidPurple.ThemeBrightColor = 'rgba(20, 0, 35)';
solidPurple.themeFlavorText = 'rgb(147, 0, 206)';

const solidYellow = new UITheme();
solidYellow.name = 'Solid Mustard';
solidYellow._id = 'SolidMustard';
solidYellow.themeRoot = 'rgba(50, 50, 0, 0.5)';
solidYellow.themeItalic = 'rgb(197, 196, 196)';
solidYellow.themeText = 'rgba(255, 253, 253, 1)';
solidYellow.themeBox = 'rgba(131, 115, 8, 1)';
solidYellow.themeAccent = 'rgba(150, 134, 12, 1)';
solidYellow.themeBorder = 'rgba(0, 0, 0, 1)';
solidYellow.themeHoverPos = 'var(--theme-accent)';
solidYellow.themeHoverNeg = 'rgba(196, 110, 0, 1)';
solidYellow.themeBlur = '15px';
solidYellow.themeBorderWidth = '0px';
solidYellow.themeBorderRadius = '8px';
solidYellow.themeFont = "'DejaVuSansBold', sans-serif";
solidYellow.themeBorderType = 'solid';
solidYellow.themeTextHover = 'rgb(255, 255, 180)';
solidYellow.themeBackground = "url('./backgrounds/yellowdefault.svg')"; // Adjust the file name if needed
solidYellow.themeButton = 'rgba(33, 30, 14, 1)';
solidYellow.ThemeBrightColor = 'rgba(52, 50, 0)';
solidYellow.themeFlavorText = 'rgba(255, 162, 0, 1)';

const lightModeSolid = new UITheme();
lightModeSolid.name = 'Solid Light Mode';
lightModeSolid._id = 'lightModeSolid';
lightModeSolid.themeRoot = 'rgba(200, 200, 200, 0.5)';
lightModeSolid.themeItalic = 'rgba(10, 2, 2, 1)';
lightModeSolid.themeText = 'rgba(10, 10, 10, 1)';
lightModeSolid.themeBox = 'rgba(220, 220, 220, 1)';
lightModeSolid.themeAccent = 'rgba(190, 190, 190, 1)';
lightModeSolid.themeBorder = 'rgba(0, 0, 0, 1)';
lightModeSolid.themeHoverPos = 'rgba(180, 180, 180, 1)';  // Note: var() isn't used here as themeAccent is light gray now.
lightModeSolid.themeHoverNeg = 'rgba(255, 50, 50, 1)';
lightModeSolid.themeBlur = '15px';
lightModeSolid.themeBorderWidth = '0px';
lightModeSolid.themeBorderRadius = '8px';
lightModeSolid.themeFont = "'DejaVuSansBold', sans-serif";
lightModeSolid.themeBorderType = 'solid';
lightModeSolid.themeTextHover = 'rgb(0, 0, 0)';
lightModeSolid.themeBackground = "url('./backgrounds/home.png')";  // You'd need an appropriate gray background SVG.
lightModeSolid.themeButton = 'rgba(240, 240, 240, 1)';
lightModeSolid.ThemeBrightColor = 'rgba(230, 230, 230)';
lightModeSolid.themeFlavorText = 'rgba(80, 80, 80, 1)';

const solidOrange = new UITheme();
solidOrange.name = 'Solid Orange';
solidOrange._id = 'SolidOrange';
solidOrange.themeRoot = 'rgba(59, 19, 0, 0.5)';
solidOrange.themeItalic = '#aaacad';
solidOrange.themeText = 'rgba(255, 253, 253, 1)';
solidOrange.themeBox = 'rgba(131, 57, 8, 1)';
solidOrange.themeAccent = 'rgba(150, 78, 12, 1)';
solidOrange.themeBorder = 'rgba(0, 0, 0, 1)';
solidOrange.themeHoverPos = 'var(--theme-accent)';
solidOrange.themeHoverNeg = 'rgba(196, 0, 0, 1)';
solidOrange.themeBlur = '15px';
solidOrange.themeBorderWidth = '0px';
solidOrange.themeBorderRadius = '8px';
solidOrange.themeFont = "'DejaVuSansBold', sans-serif";
solidOrange.themeBorderType = 'solid';
solidOrange.themeTextHover = 'rgb(255, 255, 255)';
solidOrange.themeBackground = "url('./backgrounds/orangedefault.svg')";
solidOrange.themeButton = 'rgba(33, 18, 14, 1)';
solidOrange.ThemeBrightColor = 'rgba(52, 30, 0)';
solidOrange.themeFlavorText = 'rgba(255, 162, 0, 1)';

const darkModeSolid = new UITheme();
darkModeSolid.name = 'Solid Dark Mode';
darkModeSolid._id = 'darkModeSolid';
darkModeSolid.themeRoot = 'rgba(0, 0, 0, 0.5)'; 
darkModeSolid.themeItalic = '#aaacad';
darkModeSolid.themeText = 'rgba(255, 253, 253, 1)';
darkModeSolid.themeBox = 'rgba(30, 30, 30, 1)';
darkModeSolid.themeAccent = 'rgba(60, 60, 60, 1)';
darkModeSolid.themeBorder = 'rgba(0, 0, 0, 1)';
darkModeSolid.themeHoverPos = 'var(--theme-accent)'; 
darkModeSolid.themeHoverNeg = 'rgba(196, 0, 0, 1)';
darkModeSolid.themeBlur = '15px';
darkModeSolid.themeBorderWidth = '0px';
darkModeSolid.themeBorderRadius = '8px';
darkModeSolid.themeFont = "'DejaVuSansBold', sans-serif";
darkModeSolid.themeBorderType = 'solid';
darkModeSolid.themeTextHover = 'rgb(255, 255, 255, 1)';
darkModeSolid.themeBackground = "url('./backgrounds/homedark.png')"; 
darkModeSolid.themeButton = 'rgba(40, 40, 40, 1)'; 
darkModeSolid.ThemeBrightColor = 'rgba(50, 50, 50)'; 
darkModeSolid.themeFlavorText = 'rgba(180, 180, 180, 0.5)';

export const defaultThemes: UITheme[] = [
    darkModeSolid,
    solidGreen,
    solidBlue,
    solidRed,
    solidPurple,
    solidYellow,
    lightModeSolid,
    solidOrange,
]