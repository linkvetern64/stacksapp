var REPORTS = "";

/**
 * @author Joshua Standiford
 * @desc
 * This file is used to calculate the TF-IDF of a computer issue.
 * Involved is the TF-IDF A.I. algorithm
 */


/**
 * @name IDF
 * @param occur - int - the occurrence of a word
 * @param total - int - the total number of words
 * @returns {number} - the DF
 */
function TF(occur, total){
    return (occur / total)
}

/**
 * @param totalFiles - will be the total number of computer reports
 * @param occurFiles - will be number of computer reports which contains this word
 * @return {number}
 */
function IDF(occurFiles, totalFiles){
    return Math.log(totalFiles / occurFiles);
}

function getReports(){
    new Ajax.Request( "getAllReports.php",
        {
            method: "get",
            onSuccess: TF_IDF,
            onFailure: reportFailure
        }
    );
}


function reportFailure(ajax){
    console.log(ajax.responseText);
}

function getData(){

    return data;
}

/**
 * @TODO Move the files off site, and just call TF_IDF on a whole set of data.
 * @constructor
 */
function TF_IDF(ajax){
    /*This will eventually be reports pulled from online.*/
    /*@TODO - Each file name is going to be a tag from the inventory.  Then an array will be initiated for every tag the reports
      @TODO will be concatenated and parsed.  Then for each tag, the most commonly used words will be reported.
     */
     /* Debug files
    a["apple.txt"] = "Apple Inc incorporated on January 3 1977 designs manufactures and markets mobile communication and media devices personal computers and portable digital music players The Company sells a range of related software services accessories networking solutions and third-party digital content and applications The Company 's segments include the Americas Europe Greater China Japan and Rest of Asia Pacific The Americas segment includes both North and South America The Europe segment includes European countries India the Middle East and Africa The Greater China segment includes China Hong Kong and Taiwan The Rest of Asia Pacific segment includes Australia and the Asian countries not included in the Company 's other operating segments The Company 's products and services include iPhone iPad Mac iPod Apple Watch Apple TV a portfolio of consumer and professional software applications iPhone OS iOS OS X and watchOS operating systems iCloud Apple Pay and a range of accessory service and support offerings The Company sells and delivers digital content and applications through the iTunes Store App Store Mac App Store television APP Store iBooks Store and Apple Music collectively Internet Services The Company sells its products through its retail stores online stores and direct sales force through third-party cellular network carriers wholesalers retailers and value-added resellers The Company sells a range of third-party Apple compatible products including application software and accessories through its retail and online stores The Company sells to consumers small and mid-sized businesses and education enterprise and government customers iPhone is the Company 's line of smartphones based on its iOS operating system iPhone includes Siri a voice activated intelligent assistant and Apple Pay and touch ID on qualifying devices The Company offers iPhone 7 and 7 Plus featuring new camera systems stereo speakers and water and dust resistance The Company also sells iPhone SE which has a four-inch Retina display iPhone works with the iTunes Store App Store iBooks Store and Apple Music for purchasing organizing and playing digital content and applications iPad is the Company 's line of multi-purpose tablets based on its iOS operating system iPad includes iPad Pro iPad Air and iPad mini Mac is the Company 's line of desktop and portable personal computers based on its macOS operating system The Company 's desktop computers include iMac 21.5 inches iMac with Retina 4K display 27 inches iMac with Retina 5K display Mac Pro and Mac mini The Company 's portable computers include MacBook MacBook Air MacBook Pro and MacBook Pro with Retina display Apple TV connects to consumers televisions TVs and enables them to access digital content directly for streaming high definition video playing music and games and viewing photos Content from Apple Music and other media services is also available on Apple TV Apple TV allows streaming digital content from Mac and Windows personal computers through Home Share and from compatible Mac and iOS devices through AirPlay The Company 's Apple TV runs on its tvOS operating system and is based on applications built for the television Additionally the Apple TV remote features Siri allowing users to search and access content with their voice Apple Watch is a personal electronic device that combines the watchOS user interface and technologies created specifically for a smaller device including the Digital Crown a navigation tool that allows users to seamlessly scroll zoom and navigate and force touch a technology that senses the difference between a tap and a press and allows users to access controls within applications Apple Watch enables users to communicate in new ways from their wrist track their health and fitness through activity and workout applications and includes Siri and Apple Pay The Company offers Apple Watch Series 2 featuring fitness and health capabilities iPod is the Company 's line of portable digital music and media players which includes iPod touch iPod nano and iPod shuffle All iPods work with iTunes to purchase and synchronize content iPod touch based on the Company 's iOS operating system is a flash-memory-based iPod that works with the iTunes Store App Store and iBooks Store for purchasing and playing digital content and applications iOS is the Company 's multi-touch operating system that serves as the foundation for iOS devices Devices running iOS are compatible with both Mac and Windows personal computers and Apple iCloud services The Company offers iOS 10 which introduces the ability for Siri to do more by working with applications updates messages includes redesigned maps photos Apple music and news applications and the home applications which provides a way to manage home automation products in one place macOS is the Company 's Mac operating system and is built on an open-source uniplexed information and computing system UNIX based foundation and provides an intuitive and integrated computer experience macOS Sierra incorporates Siri and Apple Pay on the Mac provides continuity and document access across Apple devices and includes the memories feature in photos watchOS is the Company 's operating system for Apple Watch The Company 's watchOS three provides ability to launch applications instantly navigation with the new Dock and new fitness and health capabilities for Apple Watch including the Breathe applications designed to promote exercises for relaxation and stress reduction tvOS is the Company 's operating system for Apple TV The tvOS operating system is based on the Company 's iOS platform and enables developers to create applications and games specifically for Apple TV and deliver them to customers through the Apple TV App Store The tvOS incorporates new Siri capabilities that allow searching across more applications and services The Company 's applications software includes iLife iWork and other software including Final Cut Pro Logic Pro X and FileMaker Pro iLife is the Company 's consumer-oriented digital lifestyle software applications suite included with all Mac computers and features iMovie a digital video editing applications and GarageBand a music creation application that allows users to play record and create music iWork is the Company 's integrated productivity suite included with all Mac computers and is designed to help users create present and publish documents through Pages presentations through Keynote and spreadsheets through Numbers The Company also has multi-touch versions of iLife and iWork applications designed specifically for use on iOS devices which are available as free downloads for all new iOS devices The iTunes Store available for iOS devices Mac and Windows personal computers and Apple TV allows customers to purchase and download music and TV shows rent or purchase movies and download free podcasts The App Store available for iOS devices allows customers to discover and download applications and purchase in-applications content The Mac applications Store available for Mac computers allows customers to discover download and install Mac applications The TV App Store allows customers access to applications and games specifically for the Apple TV The iBooks Store available for iOS devices and Mac computers features e-books from major and independent publishers Apple Music offers users a listening experience with on-demand radio stations that evolve based on a user 's play or download activity and a subscription-based Internet streaming service that also provides access to the applications music library iCloud is the Company 's cloud service which stores music photos contacts calendars mail documents and more keeping them up-to-date and available across multiple iOS devices Mac and Windows personal computers and Apple TV iCloud services include iCloud Drive iCloud Photo Library Family Sharing Find My iPhone iPad or Mac Find My Friends Notes iCloud Keychain and iCloud Backup for iOS devices AppleCare offers a range of support options for the Company 's customers These include assistance that is built into software products printed and electronic product manuals online support including comprehensive product information technical assistance the AppleCare Protection Plan APP and the AppleCare Protection Plan AC AC is a fee-based service offering additional coverage under some circumstances for instances of accidental damage in addition to the services offered by APP and is available in certain countries for iPhone iPad AppleCare Watch and iPod Apple Pay is the Company 's mobile payment service available in certain countries that offers a private way to pay Apple Pay allows users to pay for purchases in stores accepting contactless payments and to pay for purchases within participating applications on qualifying devices Apple Pay accepts credit and debit cards across major card networks and also supports reward programs and store-issued credit and debit cards The Company sells a variety of Apple-branded and third-party Mac-compatible and iOS-compatible accessories including Apple TV Apple Watch Beats products iPod headphones displays storage devices and various other connectivity and computing products and supplies The Company offers AirPods new wireless headphones that interact with Siri";
    a["facebook.txt"] = "Facebook Inc incorporated on July 29 2004 is focused on building products that enable people to connect and share through mobile devices personal computers and other surfaces The Company also enables people to discover and learn about what is going on in the world around them enables people to share their opinions ideas photos and videos and other activities with audiences ranging from their friends to the public and stay connected by accessing its products The Company 's products include Facebook Instagram Messenger WhatsApp and Oculus The Company also engages in selling advertising placements to marketers Its advertisements let marketers reach people based on a range of factors including age gender location interests and behaviors Marketers purchase advertisements that can appear in multiple places including on Facebook Instagram and third-party applications and Websites Facebook enables people to connect share discover and communicate with each other on mobile devices and personal computers There are various ways to engage with people on Facebook including News Feed which displays an algorithmically-ranked series of stories and advertisements individualized for each person Instagram enables people to take photos or videos customize them with filter effects and share them with friends and followers in a photo feed or send them directly to friends Messenger allows communicating with people and businesses alike across a range of platforms and devices WhatsApp Messenger is a messaging application that is used by people around the world and is available on a range of mobile platforms Its Oculus virtual reality technology and content platform offers products that allow people to enter an interactive environment to play games consume content and connect with others The Company competes with Google";
    a["google.txt"] = "Alphabet Inc incorporated on July 23 2015 is a holding company The Company 's businesses include Google Inc Google and its Internet products such as Access Calico CapitalG GV Nest Verily Waymo and X The Company 's segments include Google and Other Bets The Google segment includes its Internet products such as Search Ads Commerce Maps YouTube Google Cloud Android Chrome and Google Play as well as its hardware initiatives The Google segment is engaged in advertising sales of digital content applications and cloud offerings and sales of hardware products The Other Bets segment is engaged in the sales of Internet and television services through Google Fiber sales of Nest products and services and licensing and research and development R D services through Verily Google is engaged in investing in infrastructure data management analytics and artificial intelligence AI The Company offers Google Assistant which allows users to type or talk with Google in a natural conversational way to help them get things done Google Maps which helps users navigate to a store while showing them current traffic conditions and Google Photos which helps users store and organize all of their photos The Company invests in platforms such as Chrome browser Android mobile operating system Chrome operating system and Daydream virtual reality platform as well as its hardware devices such as the Pixel phone and Google Home The Company provides advertisers with tools that help them attribute and measure their advertising campaigns across screens Its advertising solutions help a range of companies grow their businesses and it offers a range of products across screens and devices For performance advertisers AdWords its primary auction-based advertising program helps create text-based advertisements that appear on Google properties and the properties of Google Network Members In addition Google Network Members use its AdSense program to display relevant advertisements on their properties generating revenues when site visitors view or click on the advertisements The Company also offers advertisement technology platform for brand advertisers agencies and publishers to help their digital marketing businesses The Company competes with Microsoft Yahoo Yandex Baidu Naver Seznam Amazon eBay Kayak LinkedIn WebMD Facebook Twitter Criteo AppNexus Netflix Hulu and Apple";
    a["microsoft.txt"] = "Microsoft Corporation incorporated on September 22 1993 is a technology company The Company develops licenses and supports a range of software products services and devices The Company 's segments include Productivity and Business Processes Intelligent Cloud and More Personal Computing The Company 's products include operating systems cross-device productivity applications server applications business solution applications desktop and server management tools software development tools video games and training and certification of computer system integrators and developers It also designs manufactures and sells devices including personal computers PCs tablets gaming and entertainment consoles phones other intelligent devices and related accessories that integrate with its cloud-based offerings It offers an array of services including cloud-based solutions that provide customers with software services platforms and content and it provides solution support and consulting services It also delivers online advertising to a global audience Productivity and Business Processes The Company 's Productivity and Business Processes segment consists of products and services in its portfolio of productivity communication and information services spanning a variety of devices and platforms This segment primarily comprises Office Commercial including volume licensing and subscriptions to Office 365 commercial for products and services such as Office Exchange SharePoint and Skype for Business and related Client Access Licenses CALs Office Consumer including Office sold through retail or through an Office 365 consumer subscription and Office Consumer Services including Skype Outlook.com and OneDrive and Dynamics business solutions including Dynamics ERP products Dynamics CRM on-premises and Dynamics CRM Online Its Office Commercial is designed to manage personal team and organizational productivity through a range of products and services Office 365 is its cloud-based service that provides access to Office plus other productivity services Skype is designed to connect friends family clients and colleagues through a variety of devices The Company competes with Adobe Systems Apple Cisco Systems Facebook Google IBM Oracle SAP Infor The Sage Group NetSuite and Salesforce.com Intelligent Cloud The Company 's Intelligent Cloud segment consists of its public private and hybrid server products and cloud services This segment primarily comprises Server products and cloud services including SQL Server Windows Server Visual Studio System Center and related CALs as well as Azure and Enterprise Services including Premier Support Services and Microsoft Consulting Services Its server products are designed to make information technology IT professionals developers and their systems productive and efficient Server software is integrated server infrastructure and middleware designed to support software applications built on the Windows Server operating system This includes the server platform database business intelligence storage management and operations virtualization service-oriented architecture platform security and identity software It also licenses standalone and software development lifecycle tools for software architects developers testers and project managers CALs provide access rights to certain server products including SQL Server and Windows Server and revenue is reported along with the associated server product Azure is a scalable cloud platform with computing networking storage database and management along with advanced services such as analytics and solutions such as Enterprise Mobility Suite Azure includes a platform that helps developers build deploy and manage enterprise mobile Web and Internet of Things applications for any platform or device Azure enables customers to devote more resources to development and use of applications that benefit their organizations rather than managing on-premises hardware and software The Company competes with Hewlett-Packard IBM Oracle Red Hat CA Technologies Apache Linux MySQL PHP SAP BMC VMware Adobe Ruby on Rails Amazon Google and Salesforce.com More Personal Computing The Company 's More Personal Computing segment consists of products and services geared towards harmonizing the interests of end users developers and IT professionals across screens of all sizes This segment primarily comprises Windows including Windows OEM licensing Windows OEM and other non-volume licensing of the Windows operating system volume licensing of the Windows operating system patent licensing Windows Embedded MSN display advertising and Windows Phone licensing Devices including Microsoft Surface Surface phones and PC accessories Gaming including Xbox hardware Xbox Live comprising transactions subscriptions and advertising video games and third-party video game royalties and Search advertising The Company designs manufactures and sells devices such as Surface phones and other intelligent devices as well as PC accessories Its devices are designed to enable people and organizations to connect to the people and content using integrated Microsoft services and Windows Surface is designed to help organizations students and consumers to be more productive Its gaming platform is designed to provide a variety of entertainment through the use of its devices peripherals applications online services and content It offers Xbox 360 and Xbox One The Company 's Xbox Live enables people to connect and share online gaming experiences and is accessible on Xbox consoles Windows-enabled devices and other devices Xbox Live services consist of subscriptions and sales of Xbox Live enabled content as well as advertising and are designed to benefit users by providing access to a network of certified applications and services and to benefit its developer and partner ecosystems by providing access to a large customer base It also designs and sells gaming content to showcase its platform capabilities for Xbox consoles Windows-enabled devices and other devices Search advertising including Bing and Bing Ads is designed to deliver online advertising to a global audience The Company competes with Amazon Apple Google Sony Nintendo Electronic Arts Activision Blizzard and Facebook";
    a["tesla.txt"] = "Tesla Inc formerly Tesla Motors Inc incorporated on July 1 2003 designs develops manufactures and sells fully electric vehicles and energy storage systems as well as installs operates and maintains solar and energy storage products The Company operates through two segments automotive and energy generation and storage The automotive segment includes the design development manufacturing and sales of electric vehicles The energy generation and storage segment includes the design manufacture installation and sale or lease of stationary energy storage products and solar energy systems to residential and commercial customers or sale of electricity generated by its solar energy systems to customers As of December 31 2016 the Company produced and sold two fully electric vehicles the Model S sedan and the Model X sport utility vehicle SUV It also offers Model 3 a sedan designed for the mass market The Company sells vehicles through its own sales and service network It offers energy storage products which includes the 14-kilowatt hour kWh Powerwall 2 with an integrated inverter for residential applications and the 200 kWh Powerpack 2 It also offers bi-directional inverter for commercial industrial and utility applications Model S is a fully electric four-door five-adult passenger sedan that offers compelling range and performance with zero tailpipe emissions It offers performance and all-wheel drive dual motor system options Model S also includes luxury features including a 17-inch touch screen driver interface its autopilot hardware to enable both active safety and convenience features and over-the-air software updates Model X is an all-electric production sport utility vehicle and offers functionality with features such as its fully electric all-wheel drive dual motor system and its autopilot system Model X can seat up to seven adults and incorporates a falcon wing door system for access to the second and third seating rows The Company develops energy storage products for use in homes commercial facilities and utility sites The applications for these battery systems include the provision of backup power grid independence peak demand reduction demand response reducing intermittency of renewable generation and wholesale electric market services The Company 's energy product portfolio includes systems with a range of applications from use in homes to use in large grid-scale projects Powerwall 2 is a 14 kWh rechargeable lithium-ion battery designed to store energy at a home or small commercial facility and can be used for self-consumption of solar power generation and as backup power In addition it offers a 200 kWh Powerpack system which can be used by commercial and industrial customers for peak shaving load shifting self-consumption of solar generation and demand response The Powerpack system is a fully integrated energy storage solution that can be used by utilities to smooth and firm the output of renewable power generation sources provide energy capacity to the grid defer or eliminate the need to upgrade transmission infrastructure and also provide for a range of grid services for utilities For grid-scale applications 200 kWh battery blocks can be grouped together to offer megawatt hours and gigawatt hours installations The Company 's components of its solar energy systems include solar panels that convert sunlight into electrical current inverters that convert the electrical output from the panels to a usable compatible with the electric grid racking that attaches the solar panels to the roof or ground electrical hardware that connects the solar energy system to the electric grid and its monitoring device It also designs and manufactures other system components The Company offers loans and leases for its vehicles in North America Europe and Asia primarily through various financial institutions It also offers financing arrangements directly through its local subsidiaries in certain areas of the United States Germany Canada and the United Kingdom The Company competes with Audi BMW Lexus Mercedes Honda Toyota Daimler Nissan Fiat Ford General Motors Mitsubishi AES Energy Storage LG Chem Samsung Vivint Solar Inc Sunrun Inc Trinity Solar and Sungevity Inc";
    */
    //files will be data's keys
    //var files = ["apple.txt", "facebook.txt", "google.txt", "microsoft.txt", "tesla.txt"];
    /* cleans and gathers the data to be parsed by the TF_IDF algorithm */
    var a = [];
    let j = JSON.parse(ajax.responseText)[Symbol.iterator]();
    for(let t of j){
        if(typeof a[t["tag"]] == 'undefined'){
            a[t["tag"]] = "";
        }
        a[t["tag"]] += t["report"] + " ";
    }

    var files = Object.keys(a);
    var size = files.length;

    var eFiles = files[Symbol.iterator]();

    var index = 0;
    var count = [];
    var allWords = {};
    var wordTotal = [];
    var words;

    for(var k = 0; k < size; k++){
        count[k] = [];
    }

    for(let file of eFiles){
        allWords[file] = [];
        words = a[file].split(" ");
        wordTotal.push(words.length);

        words = words[Symbol.iterator]();
        for(let word of words){
            if(word in count[index]){
                count[index][word] = count[index][word] + 1;
            }
            else{
                allWords[file].push(word);
                count[index][word] = 1;
            }
        }
        index += 1;
    }

    var i = 0;
    var occur = 0;

    for(var g = 0; g < count.length; g++){
        var values = [];
        var keys = Object.keys(count[g]);
        for(k = 0; k < keys.length; k++){
            occur = 0;

            //This counts the number of times a word appears in a report
            for(var v = 0; v < count.length; v++){
                if(keys[k] in count[v]){
                    occur += 1;
                }
            }
            var value = TF(count[g][keys[k]], wordTotal[i]) * IDF(occur, size);
            values.push([keys[k], Number((value).toFixed(5))]);
        }
        values.sort(sortSecondColumn);

        console.log("For computer " + files[i]);
        for(var t = 0; t < 5; t++){
            if(typeof values[t] !== 'undefined') {
                console.log(values[t]);
            }
        }

        i++;
    }

}

/**
 * @name sortSecondColumn
 * @param a
 * @param b
 * @returns {number}
 * @desc
 * Sorts a 2d array by the second column.
 */
function sortSecondColumn(a,b){
    if (a[1] === b[1]) {
        return 0;
    }
    else {
        return (a[1] > b[1]) ? -1 : 1;
    }
}