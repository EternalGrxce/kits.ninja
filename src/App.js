import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Monitor, Globe, Code, Shield, Music, Zap, 
  Gamepad2, Settings, Cpu, Terminal, Edit3, 
  ExternalLink, Copy, Check, ChevronRight, CheckSquare, RotateCcw, Wrench
} from 'lucide-react';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('operating-systems');
  const [copiedCommand, setCopiedCommand] = useState('');
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('kits-ninja-checklist');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('kits-ninja-checklist', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const categories = [
    { id: 'operating-systems', name: 'Operating Systems', icon: Monitor },
    { id: 'browsers', name: 'Browsers', icon: Globe },
    { id: 'development', name: 'Development', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'media', name: 'Media', icon: Music },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'gaming', name: 'Gaming & Social', icon: Gamepad2 },
    { id: 'system-tools', name: 'System Tools', icon: Settings },
    { id: 'hardware', name: 'Hardware', icon: Cpu },
    { id: 'utilities', name: 'Utilities', icon: Wrench },
    { id: 'commands', name: 'PowerShell', icon: Terminal },
    { id: 'registry', name: 'Registry Tweaks', icon: Edit3 },
    { id: 'guide', name: 'PC Reset Guide', icon: CheckSquare }
  ];

  const tools = {
    'operating-systems': [
      { name: 'Windows 11', url: 'https://www.microsoft.com/software-download/windows11', description: 'Latest Windows installation media' },
      { name: 'Windows 10', url: 'https://www.microsoft.com/software-download/windows10', description: 'Windows 10 installation media' },
      { name: 'Ubuntu Latest', url: 'https://ubuntu.com/download/desktop', description: 'Ubuntu desktop download page' },
      { name: 'Rufus', url: 'https://rufus.ie/', description: 'USB bootable drive creator' },
      { name: 'Ventoy', url: 'https://www.ventoy.net/', description: 'Multi-boot USB solution' }
    ],
    'browsers': [
      { name: 'Google Chrome', url: 'https://www.google.com/chrome/', description: 'Fast, secure web browser' },
      { name: 'Opera GX', url: 'https://www.opera.com/gx', description: 'Gaming browser with limiters' },
      { name: 'Brave Browser', url: 'https://brave.com/download/', description: 'Privacy-focused browser' },
      { name: 'Tor Browser', url: 'https://www.torproject.org/download/', description: 'Anonymous browsing' },
      { name: 'Firefox', url: 'https://www.mozilla.org/firefox/', description: 'Open-source web browser' }
    ],
    'development': [
      { name: 'VS Code', url: 'https://code.visualstudio.com/download', description: 'Popular code editor' },
      { name: 'Python', url: 'https://www.python.org/downloads/', description: 'Python programming language' },
      { name: 'Node.js', url: 'https://nodejs.org/en/download/', description: 'JavaScript runtime (includes npm)' },
      { name: '.NET Runtime', url: 'https://dotnet.microsoft.com/download', description: 'Microsoft .NET runtime' },
      { name: 'Git', url: 'https://git-scm.com/downloads', description: 'Version control system' },
      { name: 'Docker Desktop', url: 'https://www.docker.com/products/docker-desktop/', description: 'Containerization platform' }
    ],
    'security': [
      { name: 'Malwarebytes', url: 'https://www.malwarebytes.com/mwb-download', description: 'Anti-malware protection' },
      { name: 'Defender Control v2.1', url: 'https://www.sordum.org/9480/defender-control-v2-1/', description: 'Windows Defender control tool' },
      { name: 'AdwCleaner', url: 'https://www.malwarebytes.com/adwcleaner', description: 'Remove adware and PUPs' },
      { name: 'RKill', url: 'https://www.bleepingcomputer.com/download/rkill/', description: 'Terminate malicious processes' }
    ],
    'media': [
      { name: 'VLC Media Player', url: 'https://www.videolan.org/vlc/', description: 'Universal media player' },
      { name: 'Audacity', url: 'https://www.audacityteam.org/download/', description: 'Audio editing software' },
      { name: 'HandBrake', url: 'https://handbrake.fr/downloads.php', description: 'Video transcoder' },
      { name: 'OBS Studio', url: 'https://obsproject.com/', description: 'Live streaming and recording' },
      { name: 'GIMP', url: 'https://www.gimp.org/downloads/', description: 'Image editing software' }
    ],
    'productivity': [
      { name: 'ShareX', url: 'https://getsharex.com/', description: 'Screenshot and screen recording' },
      { name: 'Notepad++', url: 'https://notepad-plus-plus.org/downloads/', description: 'Advanced text editor' },
      { name: 'Everything', url: 'https://www.voidtools.com/', description: 'Instant file search' },
      { name: 'PowerToys', url: 'https://github.com/microsoft/PowerToys', description: 'Windows productivity utilities' }
    ],
    'gaming': [
      { name: 'Discord', url: 'https://discord.com/download', description: 'Voice and text chat' },
      { name: 'Steam', url: 'https://store.steampowered.com/about/', description: 'Gaming platform' },
      { name: 'Spotify', url: 'https://www.spotify.com/download/', description: 'Music streaming' },
      { name: 'Epic Games Launcher', url: 'https://www.epicgames.com/store/', description: 'Epic Games store client' },
      { name: 'MSI Afterburner', url: 'https://www.msi.com/Landing/afterburner/', description: 'GPU overclocking utility' }
    ],
    'system-tools': [
      { name: 'CrystalDiskInfo', url: 'https://crystalmark.info/en/software/crystaldiskinfo/', description: 'HDD/SSD health monitoring' },
      { name: '7-Zip', url: 'https://www.7-zip.org/download.html', description: 'File archiver' },
      { name: 'WinSCP', url: 'https://winscp.net/eng/downloads.php', description: 'SFTP and FTP client' },
      { name: 'PuTTY', url: 'https://www.putty.org/', description: 'SSH and telnet client' },
      { name: 'Process Monitor', url: 'https://docs.microsoft.com/en-us/sysinternals/downloads/procmon', description: 'Real-time file system monitoring' },
      { name: 'TreeSize', url: 'https://www.jam-software.com/treesize/', description: 'Disk space analyzer' }
    ],
    'hardware': [
      { name: 'NVIDIA Broadcast', url: 'https://www.nvidia.com/en-us/geforce/broadcasting/broadcast-app/', description: 'AI-powered streaming tools' },
      { name: 'Logitech G HUB', url: 'https://www.logitechg.com/en-us/innovation/g-hub.html', description: 'Logitech gaming software' },
      { name: 'Voicemeeter Potato', url: 'https://vb-audio.com/Voicemeeter/potato.htm', description: 'Virtual audio mixer' },
      { name: 'Aula F75 Driver', url: 'https://epomaker.com/blogs/software/epomaker-x-aula-f75-driver', description: 'Keyboard driver software' },
      { name: 'HWiNFO64', url: 'https://www.hwinfo.com/download/', description: 'Hardware information and monitoring' },
      { name: 'FurMark', url: 'https://geeks3d.com/furmark/', description: 'GPU stress test utility' }
    ],
    'utilities': [
      { name: 'WinRAR', url: 'https://www.rarlab.com/download.htm', description: 'File compression utility' },
      { name: 'CCleaner', url: 'https://www.ccleaner.com/ccleaner/download', description: 'System cleanup utility' },
      { name: 'Revo Uninstaller', url: 'https://www.revouninstaller.com/products/revo-uninstaller-free/', description: 'Complete software removal' },
      { name: 'Wireshark', url: 'https://www.wireshark.org/download.html', description: 'Network protocol analyzer' },
      { name: 'Autoruns', url: 'https://docs.microsoft.com/en-us/sysinternals/downloads/autoruns', description: 'Startup programs manager' }
    ]
  };

  const commands = [
    {
      title: 'Remove OneDrive',
      command: 'Get-AppxPackage -allusers Microsoft.OneDrive | Remove-AppxPackage',
      description: 'Completely removes OneDrive from system'
    },
    {
      title: 'Remove Xbox Apps',
      command: 'Get-AppxPackage *xbox* | Remove-AppxPackage',
      description: 'Removes all Xbox-related applications'
    },
    {
      title: 'Remove Bloatware',
      command: 'Get-AppxPackage *3dbuilder* | Remove-AppxPackage; Get-AppxPackage *windowsalarms* | Remove-AppxPackage; Get-AppxPackage *windowscommunicationsapps* | Remove-AppxPackage',
      description: 'Removes common Windows bloatware apps'
    },
    {
      title: 'Clean Temp Files',
      command: 'Remove-Item -Path $env:TEMP\\* -Recurse -Force',
      description: 'Clears temporary files folder'
    },
    {
      title: 'Reset TCP/IP Stack',
      command: 'netsh int ip reset',
      description: 'Resets network TCP/IP configuration'
    },
    {
      title: 'Flush DNS Cache',
      command: 'ipconfig /flushdns',
      description: 'Clears DNS resolver cache'
    },
    {
      title: 'Reset Winsock',
      command: 'netsh winsock reset',
      description: 'Resets Winsock catalog to clean state'
    },
    {
      title: 'Check System Files',
      command: 'sfc /scannow',
      description: 'Scans and repairs system files'
    },
    {
      title: 'Repair Windows Image',
      command: 'DISM /Online /Cleanup-Image /RestoreHealth',
      description: 'Repairs Windows system image'
    },
    {
      title: 'Check Disk Health',
      command: 'chkdsk C: /f /r',
      description: 'Checks and repairs disk errors'
    }
  ];

  const handleCheckboxChange = (stepIndex, itemIndex) => {
    const key = `${stepIndex}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const resetChecklist = () => {
    setCheckedItems({});
  };

  const guideSteps = [
    {
      category: 'Pre-Reset Backup',
      items: [
        'Backup important files to external drive/cloud',
        'Export browser bookmarks and passwords',
        'Note down software licenses and keys',
        'Save game saves and configs',
        'Export email accounts and settings',
        'Document current system specs and drivers'
      ]
    },
    {
      category: 'Fresh Install',
      items: [
        'Create Windows installation media',
        'Boot from USB and format drive',
        'Install Windows with clean install',
        'Skip Microsoft account creation if desired',
        'Install motherboard chipset drivers',
        'Install GPU drivers (NVIDIA/AMD)',
        'Install audio drivers',
        'Update Windows completely'
      ]
    },
    {
      category: 'Essential Software',
      items: [
        'Install web browser of choice',
        'Install 7-Zip for file extraction',
        'Install antivirus/security software',
        'Install Windows updates',
        'Install DirectX and Visual C++ redistributables',
        'Install .NET Framework/runtimes'
      ]
    },
    {
      category: 'Development Setup',
      items: [
        'Install VS Code or preferred editor',
        'Install Git and configure',
        'Install Node.js and npm',
        'Install Python if needed',
        'Set up SSH keys',
        'Configure development environment'
      ]
    },
    {
      category: 'Gaming & Media',
      items: [
        'Install Steam and game clients',
        'Install Discord for communication',
        'Install VLC for media playback',
        'Install OBS if streaming/recording',
        'Install game-specific software (launchers)',
        'Restore game saves from backup'
      ]
    },
    {
      category: 'System Optimization',
      items: [
        'Run Windows Update completely',
        'Install Windows Store apps if needed',
        'Configure Windows settings and privacy',
        'Apply registry tweaks for performance',
        'Set up file associations',
        'Configure taskbar and start menu',
        'Set up file sharing if needed'
      ]
    },
    {
      category: 'Hardware & Peripherals',
      items: [
        'Install GPU control software (MSI Afterburner)',
        'Install mouse software (Logitech G HUB)',
        'Install keyboard software and macros',
        'Install audio software (Voicemeeter)',
        'Configure multi-monitor setup',
        'Test all hardware functionality'
      ]
    },
    {
      category: 'Final Configuration',
      items: [
        'Restore bookmarks and browser data',
        'Sign into all accounts and services',
        'Configure cloud sync (OneDrive, Google Drive)',
        'Set up backup schedule',
        'Create system restore point',
        'Test all software and games',
        'Document any issues or notes'
      ]
    }
  ];

  const registryTweaks = [
    {
      title: 'Disable Windows Telemetry',
      path: '[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\DataCollection]',
      value: '"AllowTelemetry"=dword:00000000',
      description: 'Disables data collection and telemetry'
    },
    {
      title: 'Disable Auto Restart',
      path: '[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\WindowsUpdate\\AU]',
      value: '"NoAutoRebootWithLoggedOnUsers"=dword:00000001',
      description: 'Prevents automatic restart after updates'
    },
    {
      title: 'Show File Extensions',
      path: '[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Explorer\\Advanced]',
      value: '"HideFileExt"=dword:00000000',
      description: 'Shows file extensions in Explorer'
    },
    {
      title: 'Enable Transparency',
      path: '[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Themes\\Personalize]',
      value: '"EnableTransparency"=dword:00000001',
      description: 'Increases taskbar transparency'
    },
    {
      title: 'Speed Up Menus',
      path: '[HKEY_CURRENT_USER\\Control Panel\\Desktop]',
      value: '"MenuShowDelay"="100"',
      description: 'Reduces menu show delay'
    },
    {
      title: 'Disable Lock Screen',
      path: '[HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Windows\\Personalization]',
      value: '"NoLockScreen"=dword:00000001',
      description: 'Disables Windows lock screen'
    },
    {
      title: 'Disable Windows Tips',
      path: '[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\ContentDeliveryManager]',
      value: '"SoftLandingEnabled"=dword:00000000',
      description: 'Disables Windows tips and suggestions'
    },
    {
      title: 'Disable Web Search in Start',
      path: '[HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Search]',
      value: '"BingSearchEnabled"=dword:00000000',
      description: 'Disables web search in start menu'
    }
  ];

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(id);
      setTimeout(() => setCopiedCommand(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const Logo = () => (
    <div className="main-logo">
      <span className="kits-text">kits</span>
      <span className="dot-text">.</span>
      <span className="ninja-text">ninja</span>
    </div>
  );

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader-content">
          <div className="loader-logo">
            <span className="kits-text">kits</span>
            <span className="dot-text">.</span>
            <span className="ninja-text">ninja</span>
          </div>
          <div className="loader-spinner"></div>
          <div className="loader-text">Loading toolkit...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="logo-container">
            <Logo />
            <div className="divider"></div>
            <p className="subtitle">PC Setup & Reset Toolkit</p>
          </div>
          <div className="tagline">FAST. CLEAN. READY.</div>
        </div>
      </header>

      <div className="main-content">
        <div className="content-grid">
          <div className="sidebar">
            <h2 className="sidebar-title">Categories</h2>
            <nav className="nav-list">
              {categories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`nav-item ${activeCategory === category.id ? 'active' : ''} animate-slide-in-left`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="nav-icon">
                      <IconComponent size={16} />
                    </div>
                    <span className="nav-text">{category.name}</span>
                    {activeCategory === category.id && (
                      <ChevronRight size={16} style={{ color: '#666666' }} />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="content-panel animate-fade-in-up">
            {activeCategory === 'commands' ? (
              <div>
                <h1 className="content-title">PowerShell Commands</h1>
                <div className="commands-list">
                  {commands.map((cmd, index) => (
                    <div key={index} className="command-item">
                      <div className="command-header">
                        <h3 className="command-title">{cmd.title}</h3>
                        <button
                          onClick={() => copyToClipboard(cmd.command, `cmd-${index}`)}
                          className={`copy-button ${copiedCommand === `cmd-${index}` ? 'copied' : ''}`}
                        >
                          {copiedCommand === `cmd-${index}` ? (
                            <Check size={14} />
                          ) : (
                            <Copy size={14} />
                          )}
                          <span>{copiedCommand === `cmd-${index}` ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                      <p className="command-description">{cmd.description}</p>
                      <div className="command-code">{cmd.command}</div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeCategory === 'registry' ? (
              <div>
                <h1 className="content-title">Registry Tweaks</h1>
                <div className="registry-list">
                  {registryTweaks.map((tweak, index) => (
                    <div key={index} className="registry-item">
                      <div className="command-header">
                        <h3 className="command-title">{tweak.title}</h3>
                        <button
                          onClick={() => copyToClipboard(`${tweak.path}\n${tweak.value}`, `reg-${index}`)}
                          className={`copy-button ${copiedCommand === `reg-${index}` ? 'copied' : ''}`}
                        >
                          {copiedCommand === `reg-${index}` ? (
                            <Check size={14} />
                          ) : (
                            <Copy size={14} />
                          )}
                          <span>{copiedCommand === `reg-${index}` ? 'Copied!' : 'Copy'}</span>
                        </button>
                      </div>
                      <p className="command-description">{tweak.description}</p>
                      <div className="registry-code">
                        <code className="registry-path">{tweak.path}</code>
                        <code className="registry-value">{tweak.value}</code>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeCategory === 'guide' ? (
              <div>
                <div className="guide-header">
                  <h1 className="content-title">PC Reset Checklist</h1>
                  <button onClick={resetChecklist} className="reset-button">
                    <RotateCcw size={16} />
                    <span>Reset Checklist</span>
                  </button>
                </div>
                <div className="guide-list">
                  {guideSteps.map((step, stepIndex) => (
                    <div key={stepIndex} className="guide-section">
                      <h3 className="guide-section-title">{step.category}</h3>
                      <div className="guide-items">
                        {step.items.map((item, itemIndex) => {
                          const key = `${stepIndex}-${itemIndex}`;
                          const isChecked = checkedItems[key] || false;
                          return (
                            <label key={itemIndex} className="guide-item">
                              <input 
                                type="checkbox" 
                                className="guide-checkbox"
                                checked={isChecked}
                                onChange={() => handleCheckboxChange(stepIndex, itemIndex)}
                              />
                              <span className={`guide-text ${isChecked ? 'checked' : ''}`}>
                                {item}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <h1 className="content-title">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h1>
                <div className="tools-grid">
                  {tools[activeCategory]?.map((tool, index) => (
                    <a
                      key={index}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-card"
                    >
                      <div className="tool-header">
                        <h3 className="tool-name">{tool.name}</h3>
                        <ExternalLink size={16} className="external-icon" />
                      </div>
                      <p className="tool-description">{tool.description}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;