# Excel-upload

                                        Report

                                    User Interface:
I decided to start with a header section for a clear title.
Below the header I included a file upload section so users can be able to upload excel or csv files. I then decided to add a button so that when its clicked it can display data. I was avoiding the process of having to upload a file and it automatically displays, so I button prevent an automatic display.
Once the file is uploaded and the button is clicked then the table will be displayed under the search input. The search input if there so a user can use it to search for specific data instead of going through the whole document. All that is done using html and bootstrap to ensure a responsive and visually appealing design.

                                        File Processing:
I used the fileReader API to read content of the files directly in the browser. A certain method is used to read the file an an array. The onload is then triggered when the file reading operation is successfully completed. After obtaining data I utilized XLSX library to extract data from the excel file which provides a parsing method. The sheet data is extracted and converted to the structured format. Finally a table is rendered dynamically using HTML and JavaScript to display extracted data. The fileReader API enables file processing directly within the data and eliminates the need for serverside.

					                    Data Display:
When a user selects a file using the input element, javaScript code triggers the FileReader API to read the file. If it’s a csv file the papaparse library is used and for excel files its sheetJS, those libraries parse the files directly to the browser after the extraction process.
Once the data is parsed in a suitable format, the html table is dynamically generated so it can display data. After that it is inserted to the DOM by setting the innerHTML property.The data is then rendered to the browser and viewed.


                                            Styling:
 I mostly used bootstrap because it provides pre-designed css classes. It allows a responsive layout that adapts to different screen sizes hence container-fluid was used. I also used bootstrap for a striped table to style my dynamically generated HTML table. The button was styled using bootsrap classes. The input field was styled using bootstrap to ensure consistency with the form element. I used css to style the background of the page and adjusting it the way I wanted it.The layout is mostly bootstrap to it can be responsive to different devices and screen sizes. 

						                        Version Control: 
I initialized a git repo first to create a local repository so changes can be tracked.
I made regular commits after adding or fixing something so I can be able commit history and be able to view again should I need to or if something happens to my code. I pushed my local git repository to my code can be accessible online.

