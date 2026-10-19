import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const assessments = [
  {slug:'dsa', title:'Data Structures & Algorithms', category:'Technical Knowledge', description:'Test your understanding of core data structures, algorithms and complexity.', durationMin:30, passingScore:60, difficulty:'Medium', icon:'⌘', questions:[
    ['Which data structure uses LIFO (Last In First Out) principle?',['Queue','Stack','Binary Search Tree','Graph'],1,'Data Structures'],
    ['What is the average time complexity of binary search?',['O(n)','O(n²)','O(log n)','O(1)'],2,'Algorithms'],
    ['Which sorting algorithm is stable by default?',['Merge Sort','Quick Sort','Heap Sort','Selection Sort'],0,'Algorithms'],
    ['What is a binary search tree?',['A tree with random nodes','A tree where left values are smaller and right values are larger','A graph with cycles','A linked list'],1,'Trees'],
    ['Which structure is best for BFS traversal?',['Stack','Queue','Heap','Set'],1,'Graphs'],
    ['What does a hash function do?',['Encrypts a file','Maps a key to an index','Sorts an array','Creates a graph'],1,'Hashing'],
    ['Which traversal visits root, left subtree, then right subtree?',['Inorder','Postorder','Preorder','Level order'],2,'Trees'],
    ['What is the space complexity of an adjacency matrix for V vertices?',['O(V)','O(E)','O(V²)','O(log V)'],2,'Graphs'],
    ['Which data structure provides priority-based removal?',['Queue','Stack','Priority Queue','Array'],2,'Heaps'],
    ['Which algorithm finds shortest paths from one source with non-negative weights?',['DFS','BFS','Dijkstra','Kruskal'],2,'Algorithms']
  ]},
  {slug:'python', title:'Python Programming', category:'Programming', description:'Assess Python fundamentals, collections, functions, OOP and problem solving.', durationMin:25, passingScore:60, difficulty:'Easy', icon:'Py', questions:[
    ['Which keyword defines a function in Python?',['func','def','function','lambda'],1,'Python Basics'],
    ['What is the output type of len([1,2,3])?',['float','str','int','bool'],2,'Python Basics'],
    ['Which collection is immutable?',['list','dict','set','tuple'],3,'Collections'],
    ['Which symbol starts a comment in Python?',['//','#','<!--','--'],1,'Python Basics'],
    ['What does append() do to a list?',['Removes an item','Adds an item at the end','Sorts the list','Copies the list'],1,'Collections'],
    ['Which is used for exception handling?',['try/except','if/error','catch/throw','handle/error'],0,'Error Handling'],
    ['What does == compare?',['Identity only','Values','Memory size','Types only'],1,'Python Basics'],
    ['Which keyword creates a class?',['object','struct','class','define'],2,'OOP'],
    ['What is a dictionary key required to be?',['Mutable','Hashable','Numeric','A string'],1,'Collections'],
    ['Which package manager commonly installs Python packages?',['npm','pip','maven','cargo'],1,'Tools']
  ]},
  {slug:'web', title:'Web Development', category:'Development', description:'HTML, CSS, JavaScript and modern web development concepts.', durationMin:25, passingScore:60, difficulty:'Medium', icon:'</>', questions:[
    ['Which HTML tag creates a hyperlink?',['<link>','<a>','<href>','<url>'],1,'HTML'],
    ['Which CSS property changes text color?',['font','color','text-style','foreground'],1,'CSS'],
    ['Which language adds interactivity to a webpage?',['HTML','CSS','JavaScript','SQL'],2,'JavaScript'],
    ['What does DOM stand for?',['Data Object Model','Document Object Model','Digital Output Mode','Document Order Map'],1,'JavaScript'],
    ['Which HTTP method is commonly used to create a resource?',['GET','POST','DELETE','HEAD'],1,'HTTP'],
    ['Which CSS layout system is one-dimensional?',['Grid','Flexbox','Table','Float'],1,'CSS'],
    ['Which status code means Not Found?',['200','301','404','500'],2,'HTTP'],
    ['What does JSON commonly represent?',['Structured data','Images only','Stylesheets','Database tables'],0,'APIs'],
    ['Which attribute improves image accessibility?',['src','alt','href','role-only'],1,'HTML'],
    ['What is an API?',['Application Programming Interface','Advanced Page Index','Application Plugin Input','Automated Program Installer'],0,'APIs']
  ]},
  {slug:'dbms', title:'Database Management Systems', category:'Database', description:'SQL, relational databases, normalization and transaction concepts.', durationMin:30, passingScore:60, difficulty:'Hard', icon:'DB', questions:[
    ['Which command retrieves rows from a table?',['GET','SELECT','FETCHFILE','READ'],1,'SQL'],
    ['Which key uniquely identifies a row?',['Foreign key','Primary key','Index only','Composite view'],1,'Keys'],
    ['Which normal form removes repeating groups?',['1NF','2NF','3NF','BCNF'],0,'Normalization'],
    ['Which SQL clause filters rows?',['ORDER BY','WHERE','GROUP BY','JOIN'],1,'SQL'],
    ['Which JOIN returns matching rows from both tables?',['INNER JOIN','FULL JOIN','CROSS JOIN','LEFT ONLY'],0,'SQL'],
    ['What does ACID stand for in transactions?',['Atomicity, Consistency, Isolation, Durability','Accuracy, Control, Integrity, Data','Atomicity, Control, Index, Durability','None'],0,'Transactions'],
    ['Which index structure is commonly used in relational DBs?',['B-tree','Stack','Queue','Graph'],0,'Indexes'],
    ['Which command changes existing data?',['ALTER','UPDATE','CHANGE','MODIFYROW'],1,'SQL'],
    ['A foreign key usually references what?',['A view','A primary/unique key in another table','A stored procedure','A password'],1,'Keys'],
    ['Which aggregate returns the number of rows?',['TOTAL()','COUNT()','ROWS()','NUMBER()'],1,'SQL']
  ]},
  {slug:'networks', title:'Computer Networks', category:'Networking', description:'Networking fundamentals, protocols, addressing and security.', durationMin:25, passingScore:60, difficulty:'Medium', icon:'NET', questions:[
    ['Which protocol resolves domain names to IP addresses?',['HTTP','DNS','FTP','SSH'],1,'Protocols'],
    ['Which device forwards packets between networks?',['Switch','Router','Hub','Repeater'],1,'Networking'],
    ['How many bits are in an IPv4 address?',['16','32','64','128'],1,'IP Addressing'],
    ['Which protocol is connection-oriented?',['UDP','TCP','IP','ARP'],0,'Transport'],
    ['Which layer handles routing in OSI?',['Physical','Data Link','Network','Application'],2,'OSI'],
    ['HTTPS commonly uses which security protocol?',['TLS','FTP','SMTP','ICMP'],0,'Security'],
    ['Which device primarily connects devices within a LAN?',['Router','Switch','Modem only','Firewall only'],1,'Networking'],
    ['Which address identifies a network interface at Layer 2?',['IP','MAC','Port','URL'],1,'Addressing'],
    ['Which protocol is used to transfer web pages securely?',['HTTP','HTTPS','TELNET','TFTP'],1,'Protocols'],
    ['Which port is commonly associated with HTTPS?',['21','22','80','443'],3,'Ports']
  ]},
  {slug:'os', title:'Operating Systems', category:'Systems', description:'Processes, memory, scheduling, file systems and concurrency.', durationMin:30, passingScore:60, difficulty:'Hard', icon:'OS', questions:[
    ['Which component manages processes and hardware resources?',['Compiler','Kernel','Browser','Shell only'],1,'OS Basics'],
    ['Which scheduling algorithm uses time slices?',['FCFS','Round Robin','SJF','FIFO only'],1,'Scheduling'],
    ['What is virtual memory?',['Extra CPU','Disk space used to extend apparent memory','A cache only','A process'],1,'Memory'],
    ['Which can cause deadlock?',['Mutual exclusion','Only fast CPU','Read-only files','No shared resources'],0,'Concurrency'],
    ['Which page replacement algorithm is based on recent use?',['LRU','FIFO','FCFS','SJF'],0,'Memory'],
    ['What is a process?',['A program in execution','A file only','A CPU register','A network cable'],0,'Processes'],
    ['Which is not a typical process state?',['Ready','Running','Waiting','Printed'],3,'Processes'],
    ['A mutex is used for what?',['Compression','Mutual exclusion','Routing','Paging'],1,'Concurrency'],
    ['Which file system concept organizes files into directories?',['File hierarchy','CPU scheduling','Virtual memory','Interrupts'],0,'File Systems'],
    ['An interrupt is mainly used to?',['Notify CPU of an event','Increase disk size','Create a database','Compile JavaScript'],0,'OS Basics']
  ]}
];

async function main(){
  await prisma.result.deleteMany(); await prisma.question.deleteMany(); await prisma.assessment.deleteMany();
  for(const a of assessments){
    const created=await prisma.assessment.create({data:{slug:a.slug,title:a.title,category:a.category,description:a.description,durationMin:a.durationMin,passingScore:a.passingScore,difficulty:a.difficulty,icon:a.icon,questions:{create:a.questions.map((q,i)=>({text:q[0] as string,options:q[1] as string[],correctIndex:q[2] as number,skill:q[3] as string,order:i+1}))}}});
    console.log(created.title);
  }
}
main().finally(()=>prisma.$disconnect());
