
import { Clock, Shield, Phone, Car, Home, Building } from 'lucide-react';

export interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

export const generalFaqs: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer: "We serve North Bergen and surrounding areas including Jersey City, Union City, West New York, Secaucus, Weehawken, Hoboken, and Guttenberg."
  },
  {
    question: "Are you available 24/7?",
    answer: "Yes, we provide 24/7 emergency locksmith services for all your residential, commercial, and automotive needs."
  },
  {
    question: "Can you help right now?",
    answer: "Yes, we provide responsive emergency service throughout our service area."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, cash, and digital payments for your convenience."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes, we provide free estimates for all our services. Contact us to get a quote."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, we are fully licensed, bonded, and insured for your peace of mind."
  },
  {
    question: "Do you offer warranties on your work?",
    answer: "Yes, we provide warranties on all our workmanship and installed products."
  },
  {
    question: "Can you make high-security keys?",
    answer: "Yes, we can duplicate and create high-security keys for most major brands."
  },
  {
    question: "Do you work with smart home security systems?",
    answer: "Yes, we install and service various smart home security systems and smart locks."
  },
  {
    question: "What should I do if my key breaks in the lock?",
    answer: "Don't try to remove it yourself as this could damage the lock. Contact us for professional assistance with key extraction and lock repair."
  },
  {
    question: "Do you provide written estimates?",
    answer: "Yes, we provide detailed written estimates before beginning any work."
  },
  {
    question: "Do you handle emergency situations?",
    answer: "Yes, we provide emergency locksmith services 24/7 throughout our service area."
  },
  {
    question: "How can I verify your locksmith is legitimate?",
    answer: "Our locksmiths carry proper identification and arrive in marked vehicles. You can also verify our credentials by calling our main office."
  },
  {
    question: "What information should I have ready when I call for service?",
    answer: "Your location, the type of service needed, the type of lock or vehicle, and any specific details about your situation that might help us prepare."
  },
  {
    question: "Can you help with antique locks?",
    answer: "Yes, our locksmiths have experience with antique and vintage locks. We take special care with these mechanisms."
  },
  {
    question: "How do I know if I need to rekey or replace my locks?",
    answer: "Rekeying is ideal if your locks are in good condition but you need to change who has access. Replacement is recommended if locks are damaged, outdated, or you want to upgrade security."
  },
  {
    question: "What's the difference between a locksmith and a security consultant?",
    answer: "A locksmith primarily works with locks, keys, and immediate security hardware. A security consultant provides comprehensive security assessments and plans, though we offer both services."
  },
  {
    question: "Do you offer security assessments?",
    answer: "Yes, we provide professional security assessments for homes and businesses to identify vulnerabilities and recommend appropriate security measures."
  },
  {
    question: "How long does a typical locksmith service take?",
    answer: "Service times vary depending on the specific task. Simple lockouts might take 15-30 minutes, while complex installations or security system setups can take several hours."
  },
  {
    question: "What should I do if I suspect someone has a copy of my key?",
    answer: "For immediate security, we recommend having your locks rekeyed or replaced as soon as possible."
  },
  {
    question: "Can you match existing keys when installing new locks?",
    answer: "Yes, we can often key new locks to match your existing keys, allowing one key to operate multiple locks."
  },
  {
    question: "What's the most secure type of lock available?",
    answer: "High-security locks with patented key control, drill-resistant features, and pick-resistant mechanisms like those from Medeco, Mul-T-Lock, or ASSA Abloy offer the highest security."
  },
  {
    question: "Do you service safes?",
    answer: "Yes, we provide safe opening, repair, combination changes, and installation services for most major safe brands."
  },
  {
    question: "Can you help if my electronic keypad isn't working?",
    answer: "Yes, we repair, service, and replace electronic keypads and smart lock systems."
  },
  {
    question: "What precautions do you take for COVID-19 safety?",
    answer: "Our technicians follow health guidelines including wearing masks when requested, maintaining social distance when possible, and sanitizing tools and touchpoints."
  },
  {
    question: "Do you work with homeowners associations or property management companies?",
    answer: "Yes, we provide comprehensive services for HOAs and property management companies, including master key systems and regular maintenance programs."
  },
  {
    question: "How often should locks be maintained?",
    answer: "We recommend having locks professionally inspected and maintained annually, or more frequently for high-use commercial applications."
  },
  {
    question: "What areas of a home or business are most vulnerable?",
    answer: "Entry doors, ground-floor windows, sliding doors, garage doors, and basement entries are typically the most vulnerable points requiring adequate security measures."
  },
  {
    question: "Can you match unusual or decorative hardware?",
    answer: "Yes, we can source or special order hardware to match existing decorative elements in your home or business."
  },
  {
    question: "Do you work with specific brands of locks?",
    answer: "We work with all major lock brands including Schlage, Kwikset, Yale, Baldwin, Medeco, Mul-T-Lock, ASSA Abloy, and many others."
  },
  {
    question: "Are there different types of keys?",
    answer: "Yes, keys vary widely from standard residential keys to high-security keys, transponder keys, proximity fobs, smart keys, and restricted keyways."
  },
  {
    question: "What are restricted keyways?",
    answer: "Restricted keyways are specialized lock systems where keys can only be duplicated with proper authorization, typically requiring ID and signature verification."
  },
  {
    question: "How can I improve the security of my front door?",
    answer: "Install a quality deadbolt, reinforce the door frame, use a door reinforcement plate, add a security strike plate, and consider a door security bar or smart lock system."
  },
  {
    question: "What's the difference between rekeying and changing locks?",
    answer: "Rekeying changes the internal pin configuration of a lock to work with a new key while keeping the existing hardware. Changing locks involves removing the old lock and installing a completely new one."
  },
  {
    question: "Do you offer emergency board-up services?",
    answer: "Yes, we provide emergency board-up services for broken windows or damaged doors to secure your property until proper repairs can be made."
  },
  {
    question: "How do I choose the right lock for my needs?",
    answer: "Consider factors like security level required, door type and thickness, interior vs. exterior use, aesthetic preferences, budget, and special features like keyless entry."
  },
  {
    question: "What's the difference between a deadbolt and a regular doorknob lock?",
    answer: "A deadbolt offers significantly more security as it extends a solid metal bolt into the door frame that can't be pushed back when locked, unlike many doorknob locks which have angled latches."
  },
  {
    question: "Are smart locks as secure as traditional locks?",
    answer: "Quality smart locks can be as secure as traditional locks and offer additional features like remote access and activity logs, though they have different vulnerability points like potential hacking."
  },
  {
    question: "What is lock bumping and how can I protect against it?",
    answer: "Lock bumping is a technique using a specially cut key to manipulate pin tumblers. Protection includes installing bump-resistant locks, high-security cylinders, or security pins."
  },
  {
    question: "Can you make keys from a lock without the original key?",
    answer: "Yes, we can create a new key by decoding the lock either while it's installed or after removing it, depending on the lock type."
  },
  {
    question: "What should I do in case of a break-in?",
    answer: "Ensure your safety first, call the police, don't touch anything until police have investigated, document damage for insurance, and then call us for emergency lock repair and security upgrades."
  },
  {
    question: "How do I maintain my locks?",
    answer: "Regularly clean locks with compressed air, lubricate moving parts with graphite or Teflon-based lubricant (not oil), and have them professionally serviced annually."
  },
  {
    question: "What's the best type of lock for an exterior door?",
    answer: "We recommend a high-quality deadbolt (Grade 1 or 2) with a minimum 1-inch throw bolt, preferably with a reinforced strike plate and hardened steel elements."
  },
  {
    question: "Can you install locks I've purchased elsewhere?",
    answer: "Yes, we can professionally install locks you've purchased. However, we recommend discussing your needs first as we might offer comparable products with professional installation and warranty."
  },
  {
    question: "What should I do if I move into a new home?",
    answer: "We recommend rekeying all exterior locks, checking window locks, upgrading any insufficient security features, and creating a home security assessment."
  },
  {
    question: "Do you offer any senior citizen or military discounts?",
    answer: "Yes, we offer special discounts for seniors, military personnel, first responders, and veterans. Please mention your status when scheduling service."
  },
  {
    question: "What happens if my lock is damaged during a lockout service?",
    answer: "Our technicians make every effort to open locks non-destructively. If damage occurs, we can repair or replace the lock immediately in most cases."
  },
  {
    question: "How can I prevent being locked out in the future?",
    answer: "Consider keyless entry systems, hide-a-key lockboxes, leaving spare keys with trusted neighbors, or smart locks that can be accessed via smartphone."
  },
  {
    question: "Do you work with specialty or custom doors?",
    answer: "Yes, we work with all door types including custom, antique, specialty, storm, security, and commercial-grade doors."
  },
  {
    question: "What is lock picking and is it legal?",
    answer: "Lock picking is the manipulation of a lock's components without the key. It's legal when performed by a licensed locksmith on locks you own or have permission to access."
  },
  {
    question: "How do I know if my locks meet insurance requirements?",
    answer: "Insurance requirements vary by provider. We can assess your locks and advise if they meet typical standards, which usually require deadbolts on exterior doors and window locks."
  },
  {
    question: "What should I look for when choosing a locksmith?",
    answer: "Verify proper licensing, insurance, local physical address, check reviews, ask about experience with your specific need, and confirm pricing structure."
  },
  {
    question: "How long do typical locks last?",
    answer: "Quality residential locks typically last 7-10 years with proper maintenance, while commercial locks may need replacement or overhaul more frequently due to higher use."
  }
];

export const residentialFaqs: FAQ[] = [
  {
    question: "Can you rekey my house locks?",
    answer: "Yes, we provide professional rekeying services for all types of residential locks."
  },
  {
    question: "Do you install smart locks?",
    answer: "Yes, we install and program various brands of smart locks including Yale, Schlage, and August."
  },
  {
    question: "What should I do if I'm locked out late at night?",
    answer: "Contact us anytime - we provide 24/7 emergency lockout services with professional service."
  },
  {
    question: "How secure are my existing door locks?",
    answer: "We can perform a security assessment to evaluate your current locks and recommend improvements if needed."
  },
  {
    question: "Can you match all my home locks to use the same key?",
    answer: "Yes, we can rekey your home locks to operate with a single key for convenience."
  },
  {
    question: "What's the best lock for my front door?",
    answer: "We typically recommend a high-quality deadbolt with at least a Grade 2 rating, though specific recommendations depend on your door type and security needs."
  },
  {
    question: "Can you install a keyless entry system on my home?",
    answer: "Yes, we install various keyless entry systems including keypads, biometric locks, and smart locks controlled by smartphone."
  },
  {
    question: "How do I secure a sliding glass door?",
    answer: "We can install specialized sliding door locks, security bars, floor-mounted locks, or track blockers to secure sliding doors."
  },
  {
    question: "What should I do after losing my house keys?",
    answer: "We recommend rekeying your locks as soon as possible to ensure lost keys cannot be used to access your home."
  },
  {
    question: "Can you install a master key system for my home?",
    answer: "Yes, we can design and install residential master key systems that allow different levels of access for family members or service providers."
  },
  {
    question: "How can I secure my windows?",
    answer: "We offer various window security solutions including specialized locks, security film, pins, and sensors that integrate with alarm systems."
  },
  {
    question: "Do you work on garage door locks?",
    answer: "Yes, we service and install locks for garage doors, as well as garage door openers and security systems."
  },
  {
    question: "What's the most secure lock for an apartment door?",
    answer: "For apartments, we often recommend Grade 1 deadbolts, multi-point locking systems, or high-security cylinders, depending on your door type and building regulations."
  },
  {
    question: "Can you install a peephole or door viewer?",
    answer: "Yes, we install standard peepholes, wide-angle viewers, and digital door viewers with LCD displays."
  },
  {
    question: "How do I secure my home while on vacation?",
    answer: "Beyond good locks, consider timer-controlled lights, mail hold services, security cameras, and having a trusted person check your property regularly."
  },
  {
    question: "What are the benefits of keyless entry for my home?",
    answer: "Keyless entry eliminates the risk of lost keys, allows remote access control, can provide entry logs, and often allows temporary access codes for visitors or service providers."
  },
  {
    question: "Can you rekey locks without the original key?",
    answer: "Yes, we can rekey locks even without the original key by accessing the lock cylinder directly."
  },
  {
    question: "What's the difference between Grade 1, 2, and 3 locks?",
    answer: "These grades reflect security levels set by ANSI/BHMA: Grade 1 offers highest security for commercial or high-security residential use, Grade 2 is intermediate for standard residential use, and Grade 3 is basic residential security."
  },
  {
    question: "How can I secure a door with glass panels?",
    answer: "Options include security film on the glass, double-cylinder deadbolts (where permitted by code), specialized glass-break sensors, and decorative security grilles."
  },
  {
    question: "Can you install child-proof locks?",
    answer: "Yes, we offer various child-safety lock options for doors, cabinets, and windows that provide security while meeting fire safety requirements."
  },
  {
    question: "Do you work on mailbox locks?",
    answer: "Yes, we service and replace locks for residential mailboxes, community mailbox units, and parcel boxes."
  },
  {
    question: "What's the best way to secure a shed or outbuilding?",
    answer: "We recommend weather-resistant padlocks, hasp assemblies, door reinforcement, hinge protection, and potentially alarm systems for valuable storage."
  },
  {
    question: "Can you install locks on interior doors?",
    answer: "Yes, we install privacy locks, keyed locks, and electronic locks on interior doors for bedrooms, offices, or other areas requiring privacy or security."
  },
  {
    question: "How do smart locks connect to my home network?",
    answer: "Most smart locks connect via WiFi, Bluetooth, Z-Wave, or Zigbee protocols, sometimes requiring a separate hub or bridge device depending on the model."
  },
  {
    question: "What should I consider when choosing between electronic and traditional locks?",
    answer: "Consider reliability during power outages, technical comfort level, maintenance requirements, security needs, convenience factors, and budget when deciding between electronic and traditional locks."
  },
  {
    question: "Can you install high-security locks in standard doors?",
    answer: "Yes, most high-security cylinders and locks can be installed in standard doors, though some may require minor modifications which we can perform."
  },
  {
    question: "What are bump-proof locks?",
    answer: "Bump-proof locks contain specialized pins or other mechanisms that prevent the lock-bumping technique. Brands like Medeco, Mul-T-Lock, and Schlage Primus offer bump-resistant technology."
  },
  {
    question: "Do you install door closers for residential use?",
    answer: "Yes, we install and adjust door closers for residential applications, which are useful for exterior doors, garage access doors, or for accessibility needs."
  },
  {
    question: "Can you match antique or decorative hardware?",
    answer: "Yes, we can often match historical hardware or find suitable replacements that maintain the aesthetic while improving security."
  },
  {
    question: "What's the best way to secure french doors?",
    answer: "Security options for french doors include multi-point locking systems, flush bolts, security hinges, reinforced strike plates, and specialized deadbolts designed for double doors."
  },
  {
    question: "How do I secure my home if the power goes out?",
    answer: "Quality mechanical locks don't rely on power. For electronic systems, look for those with mechanical key overrides, backup battery systems, or UPS integration."
  },
  {
    question: "Can you install a doorbell camera?",
    answer: "Yes, we install various video doorbell systems and can integrate them with your existing security or smart home setup."
  },
  {
    question: "What locks are best for extreme weather conditions?",
    answer: "For extreme weather, we recommend marine-grade locks, weatherproof electronic systems, or specialty locks with protective covers and corrosion-resistant materials."
  },
  {
    question: "Do you install safes in homes?",
    answer: "Yes, we sell, deliver, install, and service various types of home safes, including wall safes, floor safes, and freestanding models."
  },
  {
    question: "How can I make my rental property more secure without permanent modifications?",
    answer: "Options include portable door locks, security bars, wireless alarm systems, door and window sensors, and smart locks that can be installed without permanent changes."
  },
  {
    question: "Can I have my home locks rekeyed to match my office keys?",
    answer: "In some cases yes, though it depends on the compatibility of your home and office lock systems. We can assess both systems and advise on the possibilities."
  },
  {
    question: "What security measures do you recommend for basement windows?",
    answer: "We recommend window well covers, security bars or grates, glass-break sensors, specialized window locks, and impact-resistant glass or security film."
  },
  {
    question: "How often should I change my locks?",
    answer: "Consider changing or rekeying locks after moving, following a break-in, after relationship changes, when keys are lost, or every 5-7 years as general maintenance."
  },
  {
    question: "What's the difference between a lockset and a deadbolt?",
    answer: "A lockset typically combines a locking doorknob or lever handle with a latch, while a deadbolt is a separate locking mechanism with a solid bolt that extends deeper into the door frame for greater security."
  },
  {
    question: "Can you fix sticky or difficult locks?",
    answer: "Yes, we can repair, clean, and lubricate locks that are difficult to operate, often extending their useful life."
  },
  {
    question: "What should I do if my key turns but the door won't unlock?",
    answer: "This usually indicates an issue with the lock mechanism or door alignment. Contact us for a service call rather than forcing the lock, which could cause more damage."
  },
  {
    question: "Are keyless locks reliable?",
    answer: "Quality modern keyless locks are generally very reliable, with most issues relating to battery maintenance or connectivity. Many include backup mechanical key options for emergencies."
  },
  {
    question: "How do I know if my home has the right level of security?",
    answer: "We offer comprehensive home security assessments that evaluate your current security measures against common threats and provide tailored recommendations."
  },
  {
    question: "Can you install a lock that can be controlled remotely?",
    answer: "Yes, we install and configure smart locks that can be controlled via smartphone apps from anywhere with internet connectivity."
  },
  {
    question: "What's the most secure type of door?",
    answer: "The most secure residential doors are solid core or steel doors with reinforced frames, quality deadbolts, security strike plates, and protected hinges."
  },
  {
    question: "Can you create restricted keys that can't be copied?",
    answer: "Yes, we offer high-security restricted keyway systems where keys can only be duplicated with proper authorization."
  },
  {
    question: "What do I do if my lock freezes in winter?",
    answer: "Apply a lock de-icer or isopropyl alcohol to melt the ice. For prevention, use dry graphite lubricant before winter and consider protective covers for exposed locks."
  },
  {
    question: "Do smart locks work during power outages?",
    answer: "Most smart locks operate on batteries separate from house power, so they continue to function during outages. Some include mechanical key backup for emergencies."
  },
  {
    question: "Can I get my existing smart lock to work with a different app or system?",
    answer: "This depends on the lock's compatibility. We can assess your current smart lock and advise on integration possibilities with other systems or recommend alternatives if needed."
  }
];

export const automotiveFaqs: FAQ[] = [
  {
    question: "Can you make new car keys?",
    answer: "Yes, we can create new keys for most vehicle makes and models."
  },
  {
    question: "Do you program car key fobs?",
    answer: "Yes, we program key fobs and transponder keys for most vehicle brands."
  },
  {
    question: "Can you unlock my car without damaging it?",
    answer: "Yes, we use professional tools and techniques to safely unlock vehicles without damage."
  },
  {
    question: "What information do I need when calling for car key services?",
    answer: "Your vehicle's make, model, year, and VIN number, plus proof of ownership such as registration or title."
  },
  {
    question: "Can you make a spare key for my car?",
    answer: "Yes, we can create spare keys for most vehicles, including those with transponder chips and proximity systems."
  },
  {
    question: "My key fob stopped working. Can you repair it?",
    answer: "We can diagnose key fob issues and either repair or replace them depending on the problem."
  },
  {
    question: "Can you replace just the key fob shell if it's broken?",
    answer: "Yes, we can transfer the electronics from your damaged shell to a new one in many cases."
  },
  {
    question: "Do you service motorcycle locks and keys?",
    answer: "Yes, we provide lock and key services for motorcycles, including ignition repair and key duplication."
  },
  {
    question: "Can you help with boat keys and locks?",
    answer: "Yes, we service marine equipment including boat ignitions, cabin locks, and storage compartments."
  },
  {
    question: "My key broke in the ignition. What should I do?",
    answer: "Don't attempt to remove it yourself. Contact us for professional broken key extraction that avoids further damage."
  },
  {
    question: "Can you repair my car's ignition switch?",
    answer: "Yes, we repair and replace ignition switches for most vehicle makes and models."
  },
  {
    question: "Can you make a key from my car's VIN number?",
    answer: "Yes, with proper proof of ownership, we can create keys based on your vehicle's VIN number."
  },
  {
    question: "Do you service older or classic cars?",
    answer: "Yes, we provide key and lock services for vintage and classic vehicles, with special attention to preserving original hardware when possible."
  },
  {
    question: "How quickly can you make a replacement car key?",
    answer: "Many common vehicle keys can be made on-site. More complex keys or rare vehicles might require ordering parts."
  },
  {
    question: "My car won't start even with the key. Can you help?",
    answer: "We can diagnose if the issue is key-related, such as a failing transponder chip or ignition problem, and provide appropriate repairs."
  },
  {
    question: "Can you program keyless entry remotes?",
    answer: "Yes, we program and repair keyless entry remotes for most vehicle makes and models."
  },
  {
    question: "Do you service RV locks and keys?",
    answer: "Yes, we provide comprehensive locksmith services for recreational vehicles, including door locks, storage compartments, and ignition systems."
  },
  {
    question: "Can you replace keys for luxury or exotic cars?",
    answer: "Yes, we can replace keys for high-end vehicles including BMW, Mercedes, Ferrari, and other luxury or exotic brands."
  },
  {
    question: "Do I need to tow my car to you if I've lost all keys?",
    answer: "No, we provide mobile automotive locksmith services and can come to your vehicle's location."
  },
  {
    question: "Are aftermarket key fobs as good as the originals?",
    answer: "Quality aftermarket fobs function similarly to OEM versions. We offer both options and can discuss the benefits and price differences."
  },
  {
    question: "Can you help if my transponder key doesn't start my car?",
    answer: "Yes, we can diagnose and resolve transponder key issues, including chip reprogramming or replacement."
  },
  {
    question: "Do you make keys for construction or agricultural equipment?",
    answer: "Yes, we service heavy equipment including construction machinery, tractors, forklifts, and other specialized vehicles."
  },
  {
    question: "My push-to-start button isn't working. Can you fix it?",
    answer: "We can diagnose keyless ignition system problems, which might involve the fob, receiver, or ignition components."
  },
  {
    question: "Can you reprogram my car's immobilizer system?",
    answer: "Yes, we can reset and reprogram vehicle immobilizer systems with proper ownership verification."
  },
  {
    question: "Do you replace car door lock cylinders?",
    answer: "Yes, we repair and replace door lock cylinders when they're damaged or need to be rekeyed."
  },
  {
    question: "Can you help if my key fob battery is dead?",
    answer: "Yes, we can replace key fob batteries and show you how to access the battery compartment for future replacements."
  },
  {
    question: "Do you service trunk locks?",
    answer: "Yes, we repair, replace, and unlock trunk lock mechanisms for all vehicle types."
  },
  {
    question: "Can you unlock a car with a dead battery?",
    answer: "Yes, we can gain entry to vehicles with dead batteries using specialized non-destructive entry techniques."
  },
  {
    question: "What's the difference between a transponder key and a basic car key?",
    answer: "A transponder key contains a microchip that communicates with your vehicle's immobilizer system. Without this signal, modern cars won't start even if the physical key fits."
  },
  {
    question: "Can you make a valet key for my car?",
    answer: "Yes, we can create valet keys that provide limited access to your vehicle, typically allowing driving but not access to trunk or glove compartment."
  },
  {
    question: "Do you unlock glove boxes and internal car compartments?",
    answer: "Yes, we can unlock glove compartments, center consoles, and other locked vehicle storage areas."
  },
  {
    question: "Can you help if my key gets stuck in the ignition?",
    answer: "Yes, we can safely remove stuck keys and repair ignition issues that cause keys to become stuck."
  },
  {
    question: "Do I need to have all my car keys reprogrammed if I lose one?",
    answer: "In many cases, we can add a new key to your vehicle's system without reprogramming existing keys, though requirements vary by vehicle."
  },
  {
    question: "Can you fix a car door that won't lock or unlock properly?",
    answer: "Yes, we repair door lock mechanisms, power lock systems, and manual lock components."
  },
  {
    question: "Is it possible to get a key made without having the original?",
    answer: "Yes, we can create new keys from scratch for most vehicles with proper ownership verification."
  },
  {
    question: "Can you disable a lost key fob so it can't be used?",
    answer: "Yes, when programming new keys or fobs, we can remove lost ones from the vehicle's memory so they no longer function."
  },
  {
    question: "Do you work on truck locks and keys?",
    answer: "Yes, we service light and heavy-duty trucks, including specialized fleet vehicles and commercial trucks."
  },
  {
    question: "Can you help if my keyless entry pad doesn't work?",
    answer: "Yes, we can diagnose and repair external keypad entry systems found on some vehicle models."
  },
  {
    question: "What's the advantage of having a spare car key?",
    answer: "A spare key provides peace of mind, saves money over emergency replacement if all keys are lost, and serves as backup during lockouts or key malfunctions."
  },
  {
    question: "Can you replace just the remote part of my key?",
    answer: "Yes, in many cases we can replace just the remote portion while retaining your existing key blade, saving you money."
  },
  {
    question: "Do you service foreign car brands?",
    answer: "Yes, we work with domestic and foreign vehicles including Japanese, European, and Korean manufacturers."
  },
  {
    question: "My car has a push button start. How do you make keys for that?",
    answer: "We program proximity keys (smart keys) that communicate with your vehicle's push-button ignition system, allowing keyless operation."
  },
  {
    question: "Can you rekey my car locks to match my house keys?",
    answer: "This is generally not possible due to the different technologies in modern automotive locks compared to residential locks."
  },
  {
    question: "My car remote works intermittently. Can you fix it?",
    answer: "We can diagnose intermittent remote issues, which could be related to the battery, internal connections, or programming."
  },
  {
    question: "Can you make a key for a classic car without modern electronics?",
    answer: "Yes, we cut and fit traditional mechanical keys for vintage and classic vehicles that don't have electronic security features."
  },
  {
    question: "Do you service convertible top locks?",
    answer: "Yes, we repair and replace convertible top locking mechanisms and related security components."
  },
  {
    question: "What's the difference between different types of car keys?",
    answer: "Car keys vary from basic mechanical keys to transponder keys, smart keys (proximity fobs), switchblade keys, and fully integrated key/remote combinations, each with different technology and capabilities."
  },
  {
    question: "Can you reprogram my car's key if it stops working after a battery replacement?",
    answer: "Yes, some vehicles require key reprogramming after battery replacement or disconnection, which we can perform."
  },
  {
    question: "Do you install aftermarket remote start systems?",
    answer: "Yes, we install and program various remote start systems that can be integrated with your vehicle's existing key system."
  }
];

export const commercialFaqs: FAQ[] = [
  {
    question: "Do you install commercial grade locks?",
    answer: "Yes, we install and service high-security commercial grade locks."
  },
  {
    question: "Can you set up a master key system?",
    answer: "Yes, we design and implement master key systems for businesses of any size."
  },
  {
    question: "Do you offer maintenance contracts?",
    answer: "Yes, we provide ongoing maintenance contracts for commercial clients."
  },
  {
    question: "Can you help with access control systems?",
    answer: "Yes, we install, program, and service electronic access control systems for businesses."
  },
  {
    question: "Do you service panic bars and emergency exits?",
    answer: "Yes, we install and maintain panic hardware and emergency exit devices to ensure code compliance and proper function."
  },
  {
    question: "Can you repair commercial door closers?",
    answer: "Yes, we service, adjust, and replace commercial door closers for proper operation."
  },
  {
    question: "Do you offer high-security commercial solutions?",
    answer: "Yes, we provide comprehensive high-security solutions including restricted keyways, electronic access, and audit-trail capabilities."
  },
  {
    question: "Can you help with ADA compliance for our door hardware?",
    answer: "Yes, we can assess your current hardware and recommend or install ADA-compliant solutions."
  },
  {
    question: "Do you service electric strikes and electromagnetic locks?",
    answer: "Yes, we install, repair, and maintain electric strikes, mag locks, and related access control hardware."
  },
  {
    question: "Can you integrate our locks with our alarm system?",
    answer: "Yes, we can integrate various locking systems with your existing alarm and security monitoring systems."
  },
  {
    question: "Do you work with property management companies?",
    answer: "Yes, we provide comprehensive locksmith services for property management companies, including master key systems and tenant turnover services."
  },
  {
    question: "Can you service and repair automatic doors?",
    answer: "Yes, we service automatic door systems including sensors, operators, and safety features."
  },
  {
    question: "Do you offer emergency commercial locksmith services?",
    answer: "Yes, we provide 24/7 emergency commercial locksmith services to address security breaches, lockouts, or hardware failures."
  },
  {
    question: "Can you install keypad or card reader access systems?",
    answer: "Yes, we install various electronic access systems including keypads, proximity cards, and biometric readers."
  },
  {
    question: "Do you service commercial safes and vaults?",
    answer: "Yes, we sell, service, and repair commercial safes, including combination changes and lock upgrades."
  },
  {
    question: "Can you implement a key control policy for our business?",
    answer: "Yes, we help design and implement key control systems and policies to track and manage your organization's keys."
  },
  {
    question: "Do you work with healthcare facilities?",
    answer: "Yes, we provide specialized locksmith services for healthcare environments, including solutions that comply with HIPAA and other regulations."
  },
  {
    question: "Can you rekey our entire office building?",
    answer: "Yes, we handle large-scale rekeying projects for office buildings and commercial complexes."
  },
  {
    question: "Do you service file cabinet and desk locks?",
    answer: "Yes, we repair, replace, and create keys for office furniture locks including file cabinets, desks, and storage units."
  },
  {
    question: "Can you install high-security key boxes?",
    answer: "Yes, we offer various secure key storage solutions including wall-mounted lockboxes and electronic key cabinets."
  },
  {
    question: "Do you work with schools and educational facilities?",
    answer: "Yes, we provide specialized security solutions for educational institutions, including classroom security and lockdown capabilities."
  },
  {
    question: "Can you implement a keyless entry system for our business?",
    answer: "Yes, we design and install keyless entry systems that can eliminate physical keys while maintaining or enhancing security."
  },
  {
    question: "Do you offer solutions for managing contractor access?",
    answer: "Yes, we provide temporary access solutions including time-limited codes, contractor key systems, and audit trail capabilities."
  },
  {
    question: "Can you help with retail security devices?",
    answer: "Yes, we service and install retail security solutions including showcase locks, security cables, and retail display protection."
  },
  {
    question: "Do you install high-security deadbolts for businesses?",
    answer: "Yes, we provide commercial-grade deadbolts meeting various security standards including ANSI Grade 1 specifications."
  },
  {
    question: "Can you repair or replace commercial door hardware?",
    answer: "Yes, we service all types of commercial door hardware including levers, pulls, exit devices, and specialized functions."
  },
  {
    question: "Do you work with hospitality businesses?",
    answer: "Yes, we provide locksmith services for hotels, motels, and other hospitality businesses, including electronic lock systems and master key implementation."
  },
  {
    question: "Can you create a tiered access system for different departments?",
    answer: "Yes, we design hierarchical master key or electronic access systems that provide appropriate access levels for different areas or personnel."
  },
  {
    question: "Do you service commercial mailbox systems?",
    answer: "Yes, we repair, rekey, and replace locks for commercial mailbox systems, including USPS-approved locks when required."
  },
  {
    question: "Can you retrofit existing doors with electronic access control?",
    answer: "Yes, we can upgrade traditional lock systems to electronic access control while working with your existing door hardware when possible."
  },
  {
    question: "Do you provide solutions for restricted areas requiring dual authentication?",
    answer: "Yes, we implement dual-authentication systems requiring two credentials or two people for access to sensitive areas."
  },
  {
    question: "Can you help with fire code compliance for our locks?",
    answer: "Yes, we ensure all lock installations comply with local fire codes and safety regulations."
  },
  {
    question: "Do you offer industrial padlocks and hasps?",
    answer: "Yes, we provide heavy-duty industrial locking solutions including weather-resistant padlocks and high-security hasps."
  },
  {
    question: "Can you service electronic cabinet and locker locks?",
    answer: "Yes, we install and service electronic locking systems for cabinets, lockers, and storage units."
  },
  {
    question: "Do you work with banks and financial institutions?",
    answer: "Yes, we provide specialized high-security solutions for financial institutions, including vault work and secure area access."
  },
  {
    question: "Can you implement a key checkout system?",
    answer: "Yes, we provide key management solutions including electronic key cabinets with tracking capabilities and manual logging systems."
  },
  {
    question: "Do you service intercom and buzzer entry systems?",
    answer: "Yes, we install and repair intercom systems, buzzer entry systems, and telephone entry systems for controlled access."
  },
  {
    question: "Can you help with security after a business break-in?",
    answer: "Yes, we provide emergency service, security assessments, and hardware upgrades following security breaches."
  },
  {
    question: "Do you offer preventative maintenance for commercial locks?",
    answer: "Yes, we provide scheduled maintenance programs to extend the life of your hardware and prevent security failures."
  },
  {
    question: "Can you service or install high-traffic commercial locks?",
    answer: "Yes, we provide heavy-duty hardware solutions designed specifically for high-traffic applications."
  },
  {
    question: "Do you work with multi-tenant buildings?",
    answer: "Yes, we design and implement complex master key systems and access control for multi-tenant facilities."
  },
  {
    question: "Can you coordinate with our IT department on electronic security?",
    answer: "Yes, we work with IT professionals to integrate electronic access control with network security and other systems."
  },
  {
    question: "Do you install locks for server racks and IT cabinets?",
    answer: "Yes, we provide specialized locking solutions for server racks, IT cabinets, and data centers."
  },
  {
    question: "Can you help with CCTV and video surveillance integration?",
    answer: "Yes, we coordinate access control with video surveillance systems for comprehensive security solutions."
  },
  {
    question: "Do you work with government facilities?",
    answer: "Yes, we provide services compliant with various government security standards and requirements."
  },
  {
    question: "Can you implement elevator access control?",
    answer: "Yes, we install systems that restrict elevator access to authorized personnel for specific floors."
  },
  {
    question: "Do you offer anti-ligature hardware for healthcare or detention facilities?",
    answer: "Yes, we provide specialized anti-ligature hardware designed to prevent self-harm in appropriate facilities."
  },
  {
    question: "Can you help with parking garage and gate security?",
    answer: "Yes, we service vehicle barriers, parking gates, and access control systems for parking facilities."
  },
  {
    question: "Do you work with factory and industrial facilities?",
    answer: "Yes, we provide industrial-grade security solutions for manufacturing and processing facilities."
  },
  {
    question: "Can you implement biometric access control?",
    answer: "Yes, we install various biometric security systems including fingerprint, retinal, and facial recognition technologies."
  }
];

export const emergencyFaqs: FAQ[] = [
  {
    question: "Do you offer 24/7 emergency service?",
    answer: "Yes, we provide emergency services throughout our entire service area."
  },
  {
    question: "Do you charge extra for night calls?",
    answer: "No, we maintain the same fair rates 24/7 without overtime charges."
  },
  {
    question: "Are you available on holidays?",
    answer: "Yes, we provide emergency services 365 days a year, including holidays."
  },
  {
    question: "How quickly can you respond to an emergency lockout?",
    answer: "Our response times vary based on location and current call volume, but we prioritize emergency situations."
  },
  {
    question: "What should I do while waiting for emergency locksmith service?",
    answer: "Stay in a safe location, especially at night. If the weather is extreme, wait in your car or a nearby business if possible."
  },
  {
    question: "Can you help if I'm locked out of my safe?",
    answer: "Yes, we provide emergency safe opening services for homes and businesses."
  },
  {
    question: "What constitutes a locksmith emergency?",
    answer: "Emergencies include lockouts, broken keys in locks, malfunctioning locks that prevent secure closure, and security breaches requiring immediate attention."
  },
  {
    question: "Can you help in case of a break-in?",
    answer: "Yes, we provide emergency service to secure your property after a break-in, including lock replacement and security upgrades."
  },
  {
    question: "Do I need to provide ID for emergency services?",
    answer: "Yes, we require identification and proof of ownership or authorized access for emergency services to protect against illegal entry."
  },
  {
    question: "What if my key breaks in the lock during the night?",
    answer: "Contact us immediately. We provide 24/7 emergency broken key extraction services."
  },
  {
    question: "Can you respond to commercial alarm lockouts?",
    answer: "Yes, we work with businesses to resolve emergency access issues, including situations involving alarm systems."
  },
  {
    question: "Do you board up broken doors or windows in emergencies?",
    answer: "Yes, we provide emergency board-up services to secure properties with damaged entry points."
  },
  {
    question: "Can you help if my electronic lock system fails?",
    answer: "Yes, we troubleshoot and repair electronic lock failures, including providing override access when systems malfunction."
  },
  {
    question: "What information should I have ready for an emergency call?",
    answer: "Your exact location, nature of the emergency, type of lock involved, and any special circumstances that might affect service."
  },
  {
    question: "Can you help if I'm locked out of a rental property?",
    answer: "Yes, though we may need to verify your authorization to access the property, such as through a lease agreement or contacting the property manager."
  },
  {
    question: "What if I have pets locked inside my home?",
    answer: "Let us know about pets when you call. We prioritize situations where children, pets, or vulnerable individuals are locked in, or where safety is at risk."
  },
  {
    question: "Do you handle emergency evictions?",
    answer: "We work with property owners and law enforcement for lock changes after legal eviction proceedings. Proper documentation is required."
  },
  {
    question: "Can you help if my car keys are locked in the trunk?",
    answer: "Yes, we have specialized tools and techniques to access vehicle trunks without causing damage."
  },
  {
    question: "What if I'm locked out in a dangerous area?",
    answer: "Your safety is priority. If possible, wait in a well-lit, public location nearby, or consider contacting local police to stand by until we arrive."
  },
  {
    question: "Can you respond to emergency lock failures at businesses?",
    answer: "Yes, we prioritize commercial lock failures that impact business operations or security."
  },
  {
    question: "What if my key fob stops working and I can't start my car?",
    answer: "We provide emergency key fob programming and replacement services, and can create mechanical keys for vehicles with electronic system failures."
  },
  {
    question: "Do you handle emergency safe openings?",
    answer: "Yes, we provide emergency safe opening services using non-destructive methods when possible."
  },
  {
    question: "Can you help if my smart lock battery dies while locked?",
    answer: "Yes, we can bypass or provide emergency power to smart locks with dead batteries, or use the mechanical override if available."
  },
  {
    question: "What if I'm locked out of my file cabinet with important documents?",
    answer: "We provide emergency opening services for office furniture and file cabinets while minimizing damage."
  },
  {
    question: "Can you help if I have a broken ignition and can't start my car?",
    answer: "Yes, we repair and replace damaged ignition cylinders and can often provide temporary solutions to get you back on the road."
  }
];

// Show first 12 general FAQs initially
export const initialFaqs = generalFaqs.slice(0, 12);

// Combine all remaining FAQs for infinite loading
export const additionalFaqs = [
  ...generalFaqs.slice(12),
  ...residentialFaqs,
  ...automotiveFaqs,
  ...commercialFaqs,
  ...emergencyFaqs
];
