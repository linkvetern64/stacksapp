<?php
/** <Author> Joshua Standiford </Author>
 ** <Date Modified> 7/27/2016 </Date Modified>
 ** <Description>
 ** Database.php acts as a class file used for database functions. 
 ** Collection of connection methods and helper functions populate this 
 ** file
 ** </Description>
 */
class DB {

	/* Constructor for Database class
	 *
	 *
	 */
    function __construct() {

    }


    /**
     * Desc: This function connects to the database
     * Called on creation of the database class
     * Preconditions: None
     * Postconditions: Either a new PDO connection is returned or null
     * @return null|PDO
     */
    private function connect(){
        $cred = parse_ini_file(dirname(__FILE__) . "/../db_key.ini");

        try{
		    $conn = new PDO("mysql:host=$cred[servername];dbname=$cred[dbname]", $cred['username'], $cred['password']);

		    // set the PDO error mode to exception
		    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		    return $conn;
        }
		catch(PDOException $e){
		   	echo "Connection failed: " . $e->getMessage();
        }
		return null;
	}


    public function testConnection(){
        return !is_null($this->connect());
    }

    /**
     * removeItem
     * @param $id
     * @return bool|null
     * @desc
     * Remove computer by tag from Stack_Computers
     */
    public function removeItem($id){
        //Remove image from images too.
        $table = "LITS_Stack_Computers";

        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("DELETE FROM $table WHERE `tag`='" . $id . "'");
            $stmt->execute();

            $conn = null;

            return true;
        }
        catch(PDOException $e){
            echo $e;
            return null;
        }

    }

    /**
     * getStacksByFloor()
     * @param $floor - int that is used for getting the stacks by floor
     * @return array|bool|null
     * @desc
     * Gets all stacks from table based by floor.
     */
    public function getStacksByFloor($floor){
        $table = "LITS_Stack_Computers";

        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("SELECT * FROM $table WHERE floor = '" . $floor . "'");
            $stmt->execute();
            $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $result = $stmt->fetchAll();
            $conn = null;

            return $result;
        }
        catch(PDOException $e){
            echo $e;
            return null;
        }
    }

    /**
     * @param $date
     * @return array|bool|null
     * @desc
     * Should return bool if entry exists or not
     */
    public function reportExists($date){
        $table = "LITS_Stack_Reports";

        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("SELECT * FROM $table WHERE date = '" . $date . "'");
            $stmt->execute();
            $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $result = $stmt->fetchAll();
            $conn = null;
            return sizeof($result);
        }
        catch(PDOException $e){
            echo $e;
            return null;
        }
    }

    /**
     * getStacks()
     * @return array|bool|null
     * @desc
     * Gets from the table LITS_Stack_Computers an entire list
     * of computers currently used in the library.
     */
    public function getStacks(){
        $table = "LITS_Stack_Computers";

        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("SELECT * FROM $table");
            $stmt->execute();
            $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $result = $stmt->fetchAll();
            $conn = null;

            return $result;
        }
        catch(PDOException $e){
            echo $e;
            return null;
        }
    }

    public function addItem($data){
        $table = "LITS_Stack_Computers";

        try {
            $conn = $this->connect();

            $stmt = $conn->prepare("INSERT INTO $table (tag, floor)
                                VALUES (:tag, :floor)");
            $stmt->bindParam(':tag', $tag);
            $stmt->bindParam(':floor', $floor);

            $tag = $data["tag"];
            $floor = $data["floor"];

            $stmt->execute();

            $conn = null;
            return true;
        }
        catch(PDOException $e){
            echo $e;
            return false;
        }

    }
}
