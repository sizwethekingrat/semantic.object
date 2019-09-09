package semantic.object;

import kafka.admin.RackAwareMode;
import kafka.zk.AdminZkClient;
import kafka.zk.KafkaZkClient;
import org.apache.kafka.common.utils.Time;

import java.util.Map;
import java.util.Properties;
import scala.collection.JavaConversions;

public class DomainKeeper {
    KafkaZkClient zkClient;
    AdminZkClient adminZkClient;
    // you should have replication factor less than or equal to number of nodes in Kafka cluster
    int partitions = 3;
    int replication = 1;

    public DomainKeeper() {
        String zookeeperHost = "127.0.0.1:2181";
        Boolean isSucre = false;
        int sessionTimeoutMs = 200000;
        int connectionTimeoutMs = 15000;
        int maxInFlightRequests = 10;
        Time time = Time.SYSTEM;
        String metricGroup = "myGroup";
        String metricType = "myType";
        zkClient = KafkaZkClient.apply(zookeeperHost, isSucre, sessionTimeoutMs,
                connectionTimeoutMs, maxInFlightRequests, time, metricGroup, metricType);
        adminZkClient = new AdminZkClient(zkClient);
        String topicName1 = "myTopic";

        Properties topicConfig = new Properties(); // you can pass topic configurations while creating topic
        if (!topicExists(topicName1)) {
            adminZkClient.createTopic(topicName1, partitions, replication, topicConfig, RackAwareMode.Disabled$.MODULE$);
        }

    }

    public static void main(String[] args) throws Exception {
        DomainKeeper domainKeeper = new DomainKeeper();
    }

    public void createTopic(final String topic, final Properties topicConfig) {
        if (!topicExists(topic))
            adminZkClient.createTopic(topic, partitions, replication, topicConfig, RackAwareMode.Disabled$.MODULE$);
    }

    public boolean topicExists(String topic) {
        return zkClient.topicExists(topic);
    }

    public Map<String, Properties> getAllTopics(){
        return JavaConversions.mapAsJavaMap(adminZkClient.getAllTopicConfigs());
    }
}
