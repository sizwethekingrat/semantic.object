/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package semantic.object.dom.api;

import static com.lightbend.lagom.javadsl.api.Service.named;
import static com.lightbend.lagom.javadsl.api.Service.pathCall;
import static com.lightbend.lagom.javadsl.api.Service.topic;

import akka.Done;
import akka.NotUsed;
import com.lightbend.lagom.javadsl.api.Descriptor;
import com.lightbend.lagom.javadsl.api.Service;
import com.lightbend.lagom.javadsl.api.ServiceCall;
import com.lightbend.lagom.javadsl.api.broker.Topic;
import com.lightbend.lagom.javadsl.api.broker.kafka.KafkaProperties;

/**
 *
 * @author Sizwe
 */
public interface DomService extends Service {
/**
   * Example: curl http://localhost:9000/dom/all
   */
  ServiceCall<NotUsed, Domain> getDom();

  @Override
  default Descriptor descriptor() {
    // @formatter:off
    return named("dom").withCalls(
        pathCall("/dom/all",  this::getDom)
//,        pathCall("/api/hello/:id", this::useGreeting)
//      ).withTopics(
//          topic("hello-events", this::helloEvents)
//          // Kafka partitions messages, messages within the same partition will
//          // be delivered in order, to ensure that all messages for the same user
//          // go to the same partition (and hence are delivered in order with respect
//          // to that user), we configure a partition key strategy that extracts the
//          // name as the partition key.
//          .withProperty(KafkaProperties.partitionKeyStrategy(), HelloEvent::getName)
        ).withAutoAcl(true);
    // @formatter:on
  }
    
}
