# Proxmox Monitor

## Description
I got tired of opening multiple tabs to manage my Proxmox servers, and having them all on a single node previously caused conflicts. On top of that, I had to dig through directories with countless folders just to find the right node.

Last week, I was learning how to build apps, and my first idea was to solve this problem. Now, with this program, I can easily see which machines are running, shut them down, or force a complete stop if shutdown doesn’t work.

It’s great because I can quickly identify active machines without straining my eyes to spot tiny icons—green highlights make them stand out.

After the step 4 :   python3 servidores
Just open the app.
dont forget to config your servers and ssh-keys

use:qm list

![Image](https://github.com/user-attachments/assets/edc3ed8f-ac25-4d59-ab27-7ca179997cdc)
## Features
- Display running virtual machines
- Shutdown or force stop machines
- Green highlight for active machines

## Upcoming Updates
- Reset button to revert to the previous snapshot
- Machine IP display feature

## Installation
1. Clone this repository:
   ```sh
   git clone --depth 1 https://github.com/4rji/bina.git
   ```
2. Navigate to the project directory:
   ```sh
   cd bina/binarios
   ```
3. Install dependencies:
   ```sh
   # Example: if using Python
   pip3 install Flask --break-system-packages &>/dev/null
   ```
4. Run the application:
   ```sh
   python3 servidores
   ```

## Usage
- Open the application and view the status of your Proxmox virtual machines.
- Click on a machine to shut it down or force stop it if needed.
- Future updates will include snapshot resets and IP display.


## Performance Improvements
   - Now using ThreadPoolExecutor to process each server in parallel (max. 4) and, within each server, to process the machines (max. 5).
   - This should improve response times by handling SSH calls and pings concurrently.
   - You can adjust the max_workers values based on your needs and system performance.

## Contributions
Feel free to open an issue or submit a pull request for improvements.

## License
This project is licensed under the MIT License.
I think so. 
