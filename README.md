# LITS Stacks App

Stacks App
-
This application is for use for LITS workers.  A responsive design for mobile functionality along with a 
web interface.  This application is to simplify stacks checks; keep track of / update library inventory; assign open tickets
to student workers; archive previous stacks reports; and monitor current offline computers.  

Prerequisites
-
* Oracle Virtualbox - https://www.virtualbox.org/wiki/Downloads
* (Windows only) GitBash - https://git-scm.com/downloads
* Vagrant -     https://www.vagrantup.com/downloads.html
* Vagrant Plugins
* GitHub - https://github.com

    (These links we're the most recent versions as of 11/14/2017)
    If you're unfamiliar with the Git tools.  A handy learning tool is available here.
    https://try.github.io/levels/1/challenges/1
    
Installation
-
* VirtualBox 

    <b>NOTE</b> before installing <u>Virtualbox</u>.  Enable virtualization within your BIOS or OS.
    Installing virtualbox should be straight forward.  
    
* GitBash 

    GitBash client is only necessary for Windows users.  If you are on a Mac or Linux device you can skip
    this step.  Otherwise navigate through the link above.  The steps as well should be pretty straight forward.
    <b>Note: </b> On windows you may encounter issues with GitBash unless you operate as Administrator.
    This can be achieved by right-clicking on the program before running and hitting
    "Run as Administrator".  
    
* Vagrant
    
    Again, installation should be rather straight forward.  However all machines are different so pay attention
    as you install in case any errors should occur.  
    
* GitHub

    Most importantly having a github account will be the means of cloning and allowing you to
    use this project.
    On the website, create an account.  This will be essential for being able to clone and use the code. 
    
    In the GitBash you will want to now clone this repository.  You can achieve that by running the command:
    
        "git clone git@github.com:linkvetern64/stacksapp.git" for ssh
        "git clone https://github.com/linkvetern64/stacksapp.git" for https
        
    
* Vagrant Plugins

    Once you have Vagrant and GitBash installed.  Open the GitBash CLI and type in
        
        "vagrant plugin install vagrant-hostsupdater" 
        "vagrant plugin install vagrant-hostmanager"
    
    -- hostsupdater is at (version. 1.0.2) as of 11/14/2017
    
    -- hostmanager is at (version. 1.8.7) as of 11/14/2017
    
Executing
-
Now that we have all the dependencies installed.  through the GitBash or CLI enter the cloned git-repo
you cloned above.  

This can be accomplished using the "cd" command.  Once you enter the folder, you should now be able to run
    
    "vagrant up"
    
If this does not work.  Make sure you see a file called Vagrantfile.  This file is how vagrant knows how to initialize itself.
now wait until Vagrant finishes filling up the terminal with output.

you can now open up your web browser and in the navigation bar enter "stacksapp.dev".
This will take you to the local server Vagrant initialized with the git project loaded.

In order to turn off the Vagrant VM and shutdown the server simply run.

    "vagrant destroy"
    

Project Specifications
-

This project (stacksapp) was created using:
 * Php5 backend
 * Prototype AJAX framework
 * BootStrap CSS3+ Framework
 * Javascript ES6 
 * HTML5
 * Intellij IDE 2017.2.2
 * Vagrant 

How to Operate
-
-- Index.php --

This is the landing page for the stacks application.  Currently this displays the amount of inactive computers in the 
library, as well as a live feed of all the computers by name.  Eventually this page can be populated with any assigned
tickets.  

<u>To-do:</u>
Currently N/A

-- inv-manager.php --

This page has the most recent computers by hostname listed by floor.  Users can delete a computer from the inventory.
In doing so, the database is updated across all facets of the web application.  Users can also update the inventory manually,
by clicking on the 

[Add New +] 

A modal will open where users can enter either one entry, or multiple through a semi-colon separated list. 

Testing
-
   

Known Bugs / Fixes
-
Content unavailable.

Authors
-
Joshua Standiford


    
  
