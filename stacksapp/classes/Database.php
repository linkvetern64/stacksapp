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

    /**
     * @param $user
     * @param $pass
     * @return array|bool
     */
    public function authorize($ID, $pass){
        $table = "user_accounts";
        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("select password from $table WHERE email = '" . $ID . "'");
            $stmt->execute();
            $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);

            $result = $stmt->fetchAll();

            $conn = null;

            return $result[0]["password"];
        }
        catch(PDOException $e){
            echo $e;
            return false;
        }
    }


    public function testConnection(){
        return !is_null($this->connect());
    }

    /*
     * @param $ID
     * @return array|bool|string
     */
    public function getName($ID){
        $table = "user_accounts";
        $ID = strtoupper($ID);
        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("SELECT * FROM $table WHERE email = '" . $ID . "'");
            $stmt->execute();
            $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
            $result = $stmt->fetchAll();

            $conn = null;

            foreach ($result as $k => $v) {
                return $v["fName"] . " " . $v["lName"];
            }

            return $result;
        }
        catch(PDOException $e){
            echo $e;
            return null;
        }
    }


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

    public function linkImage($data){
        $table = "images";

        try {
            $conn = $this->connect();
            //update otherwise insert
            $stmt = $conn->prepare("INSERT INTO images (image, ref, `type`)
                                VALUES (:image, :ref, :type)");

            $stmt->bindParam(':ref', $unique);
            $stmt->bindParam(':image', $img);
            $stmt->bindParam(':type', $type);

            if(!isset($data["email"])) {
                $campusID = strtoupper($data["campusID"]);
                $unique = $campusID . "_" . $data["nextIt"];
            }
            else{

                $unique = $data["email"];
                unset($data["email"]);
            }
            $img = $data["img"];
            $type = $data["type"];

            $stmt->execute();
            $conn = null;
            return true;
        }
        catch(PDOException $e){
            echo $e;
            return false;
        }
    }

    public function removeItem($id){
        //Remove image from images too.
        $table = "services";

        try {
            $conn = $this->connect();
            $stmt = $conn->prepare("DELETE FROM services WHERE `unique`='" . $id . "'");
            $stmt->execute();

            $stmt = $conn->prepare("DELETE FROM images WHERE ref='" . $id . "'");
            $stmt->execute();


            $conn = null;

            return true;
        }
        catch(PDOException $e){
            echo $e;
            return null;
        }

    }

    public function addItem($data){
        $table = "services";

        try {
            $conn = $this->connect();

            $stmt = $conn->prepare("INSERT INTO services (campusID, type, good, price, meta, `unique`, `desc`)
                                VALUES (:campusID, :type, :good, :price, :meta, :unique, :desc)");
            $stmt->bindParam(':campusID', $campusID);
            $stmt->bindParam(':type', $type);
            $stmt->bindParam(':good', $good);
            $stmt->bindParam(':price', $price);
            $stmt->bindParam(':meta', $meta);
            $stmt->bindParam(':unique', $unique);
            $stmt->bindParam(':desc', $desc);


            $campusID = strtoupper($data["campusID"]);
            $type = $data["type"];
            $good = $data["good"];
            $price = $data["price"];
            $meta = $data["meta"];
            $unique = $campusID . "_" . $data["nextIt"];
            $desc = $data["desc"];

            $stmt->execute();

            $conn = null;
            return true;
        }
        catch(PDOException $e){
            echo $e;
            return false;
        }

    }

    public function submit($data){
        $table = "LIBRARY_Student_Apps";

        try {
            $conn = $this->connect();

            $stmt = $conn->prepare("INSERT INTO user_accounts (lName, fName, email, campusID, password)
                                VALUES (:lName, :fName, :email, :campusID, :password)");
            $stmt->bindParam(':lName', $lastname);
            $stmt->bindParam(':fName', $firstname);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':campusID', $campusID);
            $stmt->bindParam(':password', $password);


            $lastname = $data["lName"];
            $firstname = $data["fName"];
            $email = $data["email"];
            $campusID = strtoupper($data["campusID"]);
            $password = $data["password"];

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
